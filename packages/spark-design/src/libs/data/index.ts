/**
 * @file 数据处理方法
 */
import { isPlainObject } from 'lodash-es';

export function getDataProp(data: any, prop: string | string[]) {
  if (!data) {
    return undefined;
  }
  if (typeof prop === 'string') {
    return data[prop];
  }
  if (Array.isArray(prop)) {
    for (const p of prop) {
      if (typeof data[p] !== 'undefined' && data[p] !== null) {
        return data[p];
      }
    }
  }
}

/**
 * JSON字符串转对象
 * @param {string} str 被转换的string对象
 * @param {obj} [def={}] 当转换失败或者str为空时，传递给上层的对象
 * @returns {object}
 */
export function JsonParse(str: string, def = {}) {
  if (!str) {
    return def;
  }
  try {
    return JSON.parse(str) || def;
  } catch (err) {
    // eslint-disable-next-line no-console
    console.warn('JSON解析失败:', err, str);
    return def;
  }
}

/**
 * 清理数据中的指定key或者以_fe_开头的字段
 * @param {object} data 被清理的数据
 * @param {string[]} [keys] 要清理掉的key列表,默认为`['class']`
 * @returns {object} 返回清理后的数据
 */
export function clearData(data, keys = ['class']) {
  if (Array.isArray(data)) {
    return data.map((one) => clearData(one, keys));
  } else if (data && isPlainObject(data)) {
    const newObj = {};
    Object.keys(data).forEach((key) => {
      if (
        keys.includes(key) ||
        key.startsWith('_fe_') ||
        typeof data[key] === 'undefined' ||
        typeof data[key] === 'function'
      ) {
        return;
      }
      newObj[key] = clearData(data[key], keys);
    });
    return newObj;
  }
  return data;
}
