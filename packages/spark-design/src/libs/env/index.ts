/**
 * 获取当前环境语言，例如zh-CN或者en-US
 * @returns {string}
 */
import Cookies from 'js-cookie';

export function getLang() {
  // 优先级：cookie > 环境变量 > 默认值
  if (location.host.includes('bailian.console.aliyun.com')) {
    return 'zh-CN';
  }
  if (Cookies.get('aliyun_lang')) {
    return Cookies.get('aliyun_lang') === 'en' ? 'en-US' : 'zh-CN';
  } else {
    return window.g_config?.userPreference?.language ||
      location.host.includes('alibabacloud')
      ? 'en-US'
      : 'zh-CN';
  }
}

/**
 * 当前是否是中文语言环境
 * @returns {boolean}
 */
export function isCN() {
  return getLang() === 'zh-CN';
}
