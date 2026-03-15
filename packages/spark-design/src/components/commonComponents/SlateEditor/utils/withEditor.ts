import $i18n from '@/i18n';
import { message } from 'antd';
import { Editor, Element, Operation } from 'slate';
import { HistoryEditor } from 'slate-history';
import { getEditorText, nodeStringify } from '.';
import { isInputChinese } from '..';
import { ITagRule } from '../types';

export const withEditor = (
  editor: any,
  maxWordLimit: number,
  tagRules: Record<string, ITagRule>,
) => {
  const { isInline, isVoid, insertText, insertBreak, apply } = editor;

  // 行内块元素
  editor.isInline = (element: any) =>
    tagRules[element.type]?.isInline || isInline(element);
  // 整体元素，如图片、表格...
  editor.isVoid = (element: any) =>
    tagRules[element.type]?.isVoid || isVoid(element);

  const customInsertText = (text: string) => {
    const maxLen = parseInt(editor.maxLength || maxWordLimit || '1000');
    const preText = getEditorText(editor, {
      tagRules,
    });
    const preWordCount = preText.length;

    if (preWordCount + text.length > maxLen) {
      // 超出字数部分不计入撤回
      insertText(text.substring(0, maxLen - preWordCount));
      HistoryEditor.withoutSaving(editor, () => {
        insertText(text.substring(maxLen - preWordCount, text.length));
      });
    } else {
      insertText(text);
    }

    if (editor.selection) {
      // 字数限制
      if (preWordCount + text.length > maxLen) {
        const {
          selection: {
            focus: { path, offset },
          },
        } = editor;
        // 字数限制需要删除的文本
        let deleteOffset = offset - (preWordCount + text.length - maxLen);
        let deleteText = text.substring(maxLen - preWordCount, text.length);
        let warningTip = $i18n.get(
          {
            id: 'components.SlateEditor.utils.withEditor.YouCanEnterAMaximum',
            dm: '最多可输入{maxLen}字',
          },
          { maxLen: maxLen },
        );

        // 删除超出字数限制的字（slate目前insetText重写有bug）
        HistoryEditor.withoutSaving(editor, () => {
          editor.apply({
            type: 'remove_text',
            path,
            offset: deleteOffset,
            text: deleteText,
          });
        });
        message.warning(warningTip);
      }
    }
  };

  editor.insertText = customInsertText;

  // 为减少嵌套规则带来的复杂度，复制粘贴只允许文本形式
  editor.insertFragment = (fragment) => {
    const text = nodeStringify(fragment);
    customInsertText(text);
  };

  // 标签内不允许换行
  editor.insertBreak = () => {
    const { selection } = editor;
    if (selection) {
      const [match] = Array.from(
        Editor.nodes(editor, {
          at: selection,
          match: (n) =>
            !Editor.isEditor(n) &&
            Element.isElement(n) &&
            (n as any).type !== 's',
        }),
      );
      if (match) {
        return;
      } else {
        insertBreak();
      }
    }
  };

  editor.apply = (operation: Operation) => {
    // Element元素末尾输入法输入问题处理
    if (operation.type === 'set_selection' && isInputChinese) {
      return;
    }

    apply(operation);
  };

  return editor;
};
