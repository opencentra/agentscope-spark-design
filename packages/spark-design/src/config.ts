import { ConfigProviderProps } from 'antd';
import { Locale } from 'antd/es/locale';
import { useLayoutEffect, useState } from 'react';
export const DEFAULT_ANT_PREFIX = 'ant';
export const DEFAULT_BL_PREFIX = 'bl';
export const DEFAULT_SPARK_PREFIX = 'spark';

const updates = [];

export interface CommonConfig {
  /** 用户从BLConfigProvider输入的前缀 */
  prefix?: string;
  /** antd组件前缀修改 */
  antPrefix?: string;
  /** legacy: bailian-ui组件前缀修改 */
  blPrefix?: string;
  /** spark组件前缀修改 */
  sparkPrefix?: string;
  /** 当Spark组件和antd组件重名时，是否使用Spark组件而不是antd的组件 */
  configProviderProps: ConfigProviderProps;
  locale?: Locale;
  /** iconfont 地址 */
  iconfont?: string;
  isDarkMode?: boolean;
  /** 主题配置，供 staticRenderer 等静态方法使用 */
  theme?: ConfigProviderProps['theme'];
}

const commonConfig: CommonConfig = {
  antPrefix: DEFAULT_ANT_PREFIX,
  blPrefix: DEFAULT_BL_PREFIX,
  sparkPrefix: DEFAULT_SPARK_PREFIX,
  configProviderProps: {},
  isDarkMode: false,
};

export function setCommonConfig(newConf: CommonConfig) {
  Object.assign(commonConfig, newConf);
  requestAnimationFrame(() => {
    updates.forEach((update) => update({ ...commonConfig }));
  });
}

export function getCommonConfig() {
  return commonConfig;
}

export function useCommonConfig(): CommonConfig {
  const [config, setConfig] = useState(() => getCommonConfig());
  useLayoutEffect(() => {
    const cache = setConfig;
    updates.push(cache);
    return () => {
      const index = updates.findIndex((one) => one === cache);
      if (index >= 0) {
        updates.splice(index, 1);
      }
    };
  }, []);
  return config;
}
