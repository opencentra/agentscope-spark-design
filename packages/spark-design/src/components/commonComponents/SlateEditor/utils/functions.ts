import { Editor, Element } from 'slate';
import { ITagRule } from '../types';
import { DEFAULT_TAGS } from './constant';

/**
+ * xml特殊字符转义
+ * @param xml 
+ */
export const xmlEscape = (xml: string) => {
  return xml.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');
};

export const filterEscape = (xml: string) => {
  return xml
    .replace(/&/g, '&amp;')
    .replace(/{/g, '')
    .replace(/}/g, '')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&apos;');
};

/**
 * xml转义字符还原
 * @param xml
 */
export const xmlReverseEscape = (xml: string) => {
  return xml
    .replace(/&amp;/g, '&')
    .replace(/&lt;/g, '<')
    .replace(/&gt;/g, '>')
    .replace(/&quot;/g, '"')
    .replace(/&apos;/g, "'");
};

/**
 * 序列化
 * @param value
 * @returns
 */
export const serialize = (
  value: any[],
  options?: { tagRules: Record<string, ITagRule> },
) => {
  let result = '';
  const { tagRules = {} } = options || {};

  value.forEach((node, index) => {
    if (Element.isElement(node as any)) {
      const targetTagRule = tagRules[node.type];
      if (!targetTagRule) {
        result += xmlEscape(node.text);
      } else {
        switch (targetTagRule.code) {
          case 'image':
            result += `![${node.fileName}](${node.src})`;
            break;
          case 'pdf':
            result += `[${node.fileName}](${node.src})`;
            break;
          case 's':
            result += `${serialize(node.children, options)}${
              index < value.length - 1 ? '\n' : ''
            }`;
            break;
          case 'var':
            result += `\$\{${node.code}\}`;
          default:
            break;
        }
      }
    } else {
      result += xmlEscape(node.text);
    }
  });

  return result;
};

/**
 * 获取xml格式字符串
 * @returns
 */
export const getEditorText = (
  editor?: Editor | null,
  options?: {
    tagRules: Record<string, ITagRule>;
  },
) => {
  if (editor && !!editor.children.length) {
    const text = serialize(editor.children, options);

    if (text === '<s></s>') return '';
    return xmlReverseEscape(text);
  }
  return '';
};

export const transformVarText = (str: string) => {
  if (!str) return '';
  let resultStr = '';
  let tempStr = xmlEscape(str).replace(
    /\$\{([^{}]+?)\}/g,
    function (_, varName) {
      // 替换成指定的内容
      return `<var code="${varName}" label="\${${varName}}" />`;
    },
  );

  tempStr.split('\n').forEach((item) => {
    resultStr += `<s>${item}</s>`;
  });
  return `<speak>${resultStr}</speak>`;
};

/**
 	+ * xml的Dom对象转换成json对象
 	+ * @param xmlObj 
 	+ */
export const xmlObj2json = (xmlObj: Document) => {
  const jsonObj: any[] = [];

  if (xmlObj?.childNodes?.length > 0) {
    xmlObj.childNodes.forEach((node: any, index, array) => {
      const { nodeType, nodeName } = node;
      if (nodeType === 1) {
        const attributes: any = {};
        for (let i = 0; i < node.attributes.length; i++) {
          const { nodeName: attributeName, nodeValue: attributeValue } =
            node.attributes[i];
          attributes[attributeName] = attributeValue;
        }
        const nodeObject = { type: nodeName, ...attributes };

        if (node.childNodes.length > 0) {
          // 非闭合标签节点
          nodeObject.children = xmlObj2json(node);
        } else {
          // 闭合节点
          nodeObject.children = [{ text: '' }];
        }
        jsonObj.push(nodeObject);

        // 规范化
        if (nodeName !== 's') {
          if (index > 0 && array[index - 1].nodeType === 1) {
            jsonObj.unshift({ text: '' });
          }
          if (index === array.length - 1) {
            jsonObj.push({ text: '' });
          }
        }
      } else if (nodeType === 3) {
        // 叶子结点
        jsonObj.push({ text: node.nodeValue || '' });
      }
    });
  }

  return jsonObj;
};

/**
 * 反序列化
 * @param text
 */
export const text2json = (text?: string) => {
  if (!text) return undefined;
  const xmlObj = new DOMParser().parseFromString(text, 'text/xml');
  return xmlObj2json(xmlObj);
};

export const wrapSpeakTag = (val?: string) => {
  if (!val || val.includes('</speak>')) return val;
  let tempStr = val;
  if (!tempStr.includes('<s>')) tempStr = `<s>${tempStr}</s>`;
  return `<speak>${tempStr}</speak>`;
};

export const transformTagRules = (rules: ITagRule[] = []) => {
  const newTagMap: Record<string, ITagRule> = {};
  [...rules, ...DEFAULT_TAGS].forEach((item) => {
    if (newTagMap[item.code]) return;
    newTagMap[item.code] = item;
  });
  return newTagMap;
};
