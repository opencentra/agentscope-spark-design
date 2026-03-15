import $i18n from '@/i18n';
import { message } from 'antd';
import {
  BasePoint,
  Editor,
  Element,
  Node,
  Path,
  Range,
  Text,
  Transforms,
} from 'slate';
import { ReactEditor } from 'slate-react';
import { CustomElement, InsertNodesOptions, WrapNodesOptions } from '../types';

/**
 * 插入节点
 * @param editor
 * @param element
 * @param options
 */
export const insertNodes = (
  editor?: any,
  element?: any,
  options?: InsertNodesOptions,
) => {
  if (!editor || !element) return;
  const { selection } = editor;
  let point: BasePoint | null = null;
  if (selection) point = selection.focus;
  if (options?.at) point = options?.at;
  if (!point) point = { path: [0, 0], offset: 0 };

  const { path, offset } = point;
  const parentNode = Node.get(editor, Path.parent(path)) as Element;
  if (Editor.isVoid(editor, parentNode)) return;
  const text = Node.string(Node.get(editor, path));
  const preText = text.substring(0, offset - (options?.deletePrefix ? 1 : 0));
  const nextText = text.substring(offset, text.length);

  /**
   * []内是原来的内容，需要之后删掉
   * 整个过程类似于：
   * [前后] -> 后[前后] -> 插后[前后] -> 前插后[前后] -> 前插后
   */
  Editor.withoutNormalizing(editor, () => {
    editor.apply({
      type: 'insert_node',
      node: { text: nextText },
      path,
    });
    editor.apply({
      type: 'insert_node',
      node: element,
      path,
    });
    editor.apply({
      type: 'insert_node',
      node: { text: preText },
      path,
    });

    const delPath = Path.next(Path.next(Path.next(path)));
    editor.apply({
      type: 'remove_node',
      path: delPath,
      node: Node.get(editor, delPath),
    });

    // 设置光标位置
    const point = { path: Path.next(Path.next(path)), offset: 0 };
    editor.apply({
      type: 'set_selection',
      properties: null,
      newProperties: { anchor: point, focus: point },
    });
    ReactEditor.focus(editor);
    editor.onChange();
  });
};

/**
 * 包裹节点
 * @param editor
 * @param element
 * @param options
 * @returns
 */
export const wrapNodes = async (
  editor?: Editor,
  element?: CustomElement,
  options?: WrapNodesOptions,
) => {
  if (!editor || !element) return;
  const { selection: defaultSelection } = editor;
  const { tip, selection = defaultSelection } = options || {};
  const eleTag = options?.rules?.[element.type];

  if (selection && !Range.isCollapsed(selection)) {
    const fragment = Node.fragment(editor, selection);
    const selectedText = nodeStringify(fragment);
    /**
     * 过滤未选中文本
     */
    if (selectedText === '') return;

    /**
     * 选区判断是否合理
     */
    const [start, end] = copyObject(Range.edges(selection));
    // 如果选区开始位置或结束位置在void元素上
    if (
      Editor.isVoid(editor, Node.get(editor, Path.parent(start.path)) as any)
    ) {
      start.path = Path.next(Path.parent(start.path));
      start.offset = 0;
    }
    if (Editor.isVoid(editor, Node.get(editor, Path.parent(end.path)) as any)) {
      end.path = Path.previous(Path.parent(end.path));
      end.offset = Node.string(Node.get(editor, end.path)).length;
    }

    // 选中Element元素的情况下，Element元素前存在非空的Text节点时，选区会选不中前面的Text节点的末尾位置
    if (
      Path.hasPrevious(end.path) &&
      Node.get(editor, Path.parent(start.path)) ===
        Node.get(editor, Path.previous(end.path)) &&
      start.offset === 0 &&
      end.offset === 0
    ) {
      const textPath = Path.previous(Path.parent(start.path));
      const textNode = Node.get(editor, textPath) as Text;
      start.path = textPath;
      start.offset = textNode.text.length;
    }

    // 处理Element在句首或者句末选区容易跨选区的情况
    if (!(Node.parent(editor, start.path) === Node.parent(editor, end.path))) {
      let startNode = Node.get(editor, start.path);
      const endNodeSelectedText = nodeStringify(
        Node.fragment(editor, {
          anchor: { path: end.path, offset: 0 },
          focus: end,
        }),
      );
      while (
        Text.isText(startNode) &&
        startNode.text === '' &&
        selectedText === endNodeSelectedText
      ) {
        start.path.splice(start.path.length - 1, 1, 1, 0);
        startNode = Node.get(editor, start.path);
      }

      let endNode = Node.get(editor, end.path);
      const startNodeText = Node.string(
        Node.get(editor, Range.edges(selection)[0].path),
      );
      const startNodeSelectedText = nodeStringify(
        Node.fragment(editor, {
          anchor: start,
          focus: { path: start.path, offset: startNodeText.length },
        }),
      );
      while (
        Text.isText(endNode) &&
        endNode.text === '' &&
        selectedText === startNodeSelectedText
      ) {
        const deepIndex = end.path[end.path.length - 1];
        end.path.splice(end.path.length - 1, 1, deepIndex - 1);
        endNode = Node.get(editor, end.path);
        if (Element.isElement(endNode)) {
          end.path.push(endNode.children.length - 1);
          end.offset = startNodeText.length;
        }
      }
    }

    /**
     * 过滤选区跨节点，只要光标所在的Text节点的父节点不同，则属于跨界点
     */
    if (!(Node.parent(editor, start.path) === Node.parent(editor, end.path))) {
      message.info(
        $i18n.get({
          id: 'components.SlateEditor.utils.editor.TheSelectionRangeIsIncorrect',
          dm: '划选范围有误',
        }),
      );
      return;
    }

    /**
     * 节点嵌套关系处理
     */
    // 检查外部标签
    let outterPath = Path.parent(start.path);
    const wrapTagName = eleTag?.name || getTagNameText();
    const outterNode: any = Node.get(editor, outterPath);
    const outterTag = options?.rules?.[outterNode.type];
    while (eleTag?.out && outterPath.length > 1) {
      if (!eleTag.out.includes(outterNode.type)) {
        // 提示文本处理
        const tagName = outterTag?.name || getTagNameText();
        message.warning(
          $i18n.get(
            {
              id: 'components.SlateEditor.utils.editor.WraptagnameCannotBePlacedIn',
              dm: '【{wrapTagName}】不能在放在【{tagName}】内',
            },
            { wrapTagName: wrapTagName, tagName: tagName },
          ),
        );
        return;
      }

      outterPath = Path.parent(outterPath);
    }
    // 检查内部标签
    if (
      eleTag?.inner &&
      !(Node.get(editor, start.path) === Node.get(editor, end.path))
    ) {
      let innerPath = Path.next(start.path);
      while (!Path.equals(innerPath, end.path)) {
        const innerNode: any = Node.get(editor, innerPath);
        const innerTag = options?.rules?.[(innerNode as CustomElement).type];
        if (
          Element.isElement(innerNode) &&
          !eleTag.inner.includes((innerNode as any).type)
        ) {
          // 提示文本处理
          const tagName = innerTag?.name || getTagNameText();
          message.warning(
            $i18n.get(
              {
                id: 'components.SlateEditor.utils.editor.WraptagnameCannotBeNestedIn',
                dm: '【{wrapTagName}】中不能嵌套【{tagName}】',
              },
              { wrapTagName: wrapTagName, tagName: tagName },
            ),
          );
          return;
        }

        innerPath = Path.next(innerPath);
      }
    }

    /**
     * 嵌套节点
     */
    Editor.withoutNormalizing(editor, () => {
      // 1、获取选中部分内容
      const parentNode = Node.parent(editor, start.path);
      const selectedNodes = Node.fragment(parentNode, {
        anchor: {
          path: [start.path[start.path.length - 1]],
          offset: start.offset,
        },
        focus: { path: [end.path[end.path.length - 1]], offset: end.offset },
      });
      // 2、删除选中部分内容
      const startText = Node.string(Node.get(editor, start.path));
      if (Path.equals(start.path, end.path)) {
        editor.apply({
          type: 'remove_text',
          path: start.path,
          offset: start.offset,
          text: startText.substring(start.offset, end.offset),
        });
      } else {
        editor.apply({
          type: 'remove_text',
          path: start.path,
          offset: start.offset,
          text: startText.substring(start.offset, startText.length),
        });
        const deletePath = Path.next(start.path);
        while (!Path.equals(deletePath, end.path)) {
          editor.apply({
            type: 'remove_node',
            path: deletePath,
            node: Node.get(editor, deletePath),
          });
          end.path = Path.previous(end.path);
        }
        const endText = Node.string(Node.get(editor, end.path));
        editor.apply({
          type: 'remove_text',
          path: end.path,
          offset: 0,
          text: endText.substring(0, end.offset),
        });
      }

      // 如果选区不在同一Text节点，需要将相邻的Text节点合并
      if (!Path.equals(start.path, end.path)) {
        const endNode = Node.get(editor, end.path);
        editor.apply({ type: 'remove_node', path: end.path, node: endNode });
        const endText = Node.string(endNode);
        editor.apply({
          type: 'insert_text',
          path: start.path,
          offset: start.offset,
          text: endText,
        });
      }

      // 3、将选中部分包裹插入
      insertNodes(
        editor,
        { ...element, children: selectedNodes },
        { at: start, rules: options?.rules },
      );
    });
  } else {
    if (tip) message.warning(tip);
  }
};

/**
 * 拆开节点
 * @param editor
 * @param nodes
 */
export const unwrapNodes = (
  editor?: Editor | null,
  path?: Path,
  cb?: () => void,
) => {
  if (!editor || !path) return;
  const node = Node.get(editor, path) as Element;
  const children = copyObject(node.children).reverse();

  Editor.withoutNormalizing(editor, () => {
    // 删除节点
    editor.apply({
      type: 'remove_node',
      node,
      path,
    });
    // 将子节点插入原先路径
    children.forEach((child) => {
      editor.apply({
        type: 'insert_node',
        node: child,
        path,
      });
    });
    // 将Text节点进行合并
    const parentPath = Path.parent(path);
    let parentNode = Node.get(editor, parentPath);
    // 从前往后合并Text节点
    let i = 0;
    while (Node.has(parentNode, [i + 1])) {
      if (
        Text.isText(Node.get(parentNode, [i])) &&
        Text.isText(Node.get(parentNode, [i + 1]))
      ) {
        const childPath = [...parentPath];
        childPath.push(i + 1);

        // 将当前Text节点跟前一个Text节点合并，先删除Text节点再向前一个Text节点末尾插入文本
        const mergeNode = Node.get(editor, childPath);
        const mergeText = Node.string(mergeNode);
        editor.apply({ type: 'remove_node', path: childPath, node: mergeNode });
        const targetPath = Path.previous(childPath);
        const targetText = Node.string(Node.get(editor, targetPath));
        editor.apply({
          type: 'insert_text',
          path: Path.previous(childPath),
          offset: targetText.length,
          text: mergeText,
        });

        // 合并节点之后，父节点的子节点，需要tagList
        parentNode = Node.get(editor, parentPath);
      } else {
        i++;
      }
    }

    cb?.();

    Path.previous(path);
  });
};

/**
 * 节点设置新的属性
 * @param editor
 * @param nodeProps 新节点属性
 * @param options 设置的节点路径
 */
export const setNodes = (
  editor: Editor,
  nodeProps: Partial<Node>,
  options: { at: Path },
) => {
  const { at } = options;
  editor.apply({
    type: 'set_node',
    path: at,
    properties: nodeProps,
    newProperties: nodeProps,
  });
  // 重新渲染
  editor.onChange();
};

/**
 * 替换节点
 * @param editor
 * @param node 新节点
 * @param path 久节点路径
 */
export const replaceNode = (editor: Editor, node: Node, path: Path) => {
  editor.apply({ type: 'remove_node', path, node: Node.get(editor, path) });
  editor.apply({ type: 'insert_node', path, node });
};

/**
 * 重新设置全文内容，content不传则清空全文
 * @param editor
 * @param content
 */
export const setEditorContent = (
  editor?: Editor | null,
  content?: Array<Node>,
) => {
  if (!editor) return;
  Editor.withoutNormalizing(editor, () => {
    const children = copyObject(editor.children);
    children.forEach((child) => {
      editor.apply({
        type: 'remove_node',
        path: [0],
        node: child,
      });
    });

    const newChildren = content
      ? copyObject(content)
      : ([{ type: 's', children: [{ text: '' }] }] as Array<any>);
    newChildren.reverse();
    newChildren.forEach((newChild) => {
      editor.apply({
        type: 'insert_node',
        path: [0],
        node: newChild,
      });
    });
  });
  // 重新渲染
  editor.onChange();
};

/**
 * 获取节点字符串内容
 * @param {Node[]} nodes
 * @returns {Node[]}
 */
export const nodeStringify = (nodes: Node[] = []) => {
  return nodes.reduce((result, node) => result + Node.string(node), '');
};

/**
 * 深克隆对象（不涉及克隆undefined、function、symbol等类型属性）
 * @param {object | array | string | number} obj
 * @returns {object | array | string | number}
 */
export const copyObject = <T>(object: T) => {
  return JSON.parse(JSON.stringify(object)) as T;
};

/**
 * 获取标签对应名称文本
 * @param {CustomElement} element
 * @return {string}
 */
export const getTagNameText = () => {
  let wrapTagName = '';

  return wrapTagName;
};

export const mapRender = (list: any) => {
  return list[0]?.children
    ?.map((item: any) => item.children.map((item: any) => item.text).join(''))
    .join('');
};

export const renderTime = (time = 0) => {
  // time是秒级别
  const seconds = time % 60;
  let minutes = parseInt(`${time / 60}`);
  let hour = 0;
  if (minutes > 60) {
    minutes = minutes % 60;
    hour = parseInt(`${minutes / 60}`);
  }
  return `${hour ? `${covertTime(hour)}:` : ''}${covertTime(
    minutes,
  )}:${covertTime(seconds)}`;
};

export const covertTime = (time: number) => {
  if (time >= 10) return `${time}`;
  return `0${time}`;
};

export const findNodePath = (editor?: any, item?: Node) => {
  if (!editor || !item) return undefined;
  return ReactEditor.findPath(editor, item);
};

export const setCursorRemove = (editor?: any) => {
  if (!editor) return;
  Editor.withoutNormalizing(editor, () => {
    const endPath = Editor.end(editor, []);
    Transforms.select(editor, endPath);
    ReactEditor.focus(editor);
    editor.onChange();
  });
};
