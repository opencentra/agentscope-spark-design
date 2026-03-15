/**
 * @file dom操作公共方法
 */
import createDOMPurify from 'dompurify';

const DOMPurify = createDOMPurify(window);

// 保留a标签的target属性
const defaultOptions = { ADD_ATTR: ['target'] };

/**
 * @function safeHtml(html) 过滤非法html内容
 * @param {string} html 要过滤的html内容
 * @param {object} [options] 过滤时的配置项, 参考https://www.npmjs.com/package/dompurify
 * @returns {string} 返回过滤后的html
 */
export function safeHtml(html, options = {}) {
  return DOMPurify.sanitize(html || '', { ...defaultOptions, ...options });
}

// 查找离triggerNode最近的符合selector的元素
export const findClosestBySelector = (
  element: HTMLElement,
  selector: string,
): HTMLElement => {
  // 从元素本身开始，向上查找最近的符合selector的祖先元素
  let closest = element.closest(selector) as HTMLElement;
  if (closest) return closest;

  // 如果没有找到，则尝试document全局查找，退化为原来的逻辑
  return document.querySelector(selector) as HTMLElement;
};
