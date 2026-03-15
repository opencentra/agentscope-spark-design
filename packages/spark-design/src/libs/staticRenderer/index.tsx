import { getCommonConfig } from '@/config';
// import $i18n from '@/i18n';
import { ConfigProvider } from '@/index';
import ReactDOM from 'react-dom/client';

/**
 * @description 静态方法渲染组件
 */

export default {
  show: (modal: React.ReactElement, id?: string) => {
    const { prefix, antPrefix, configProviderProps, theme } = getCommonConfig();
    // 从 configProviderProps 中移除 theme，使用 commonConfig 中保存的 mergedTheme
    const { theme: _, ...restConfigProviderProps } = configProviderProps || {};
    const prevModal = document.querySelector(
      `div[role=${prefix}-static${id ? `-${id}` : ''}]`,
    );
    if (prevModal) {
      prevModal.parentElement.removeChild(prevModal);
    }
    const container = document.createElement('div');
    container.setAttribute('role', `${prefix}-static${id ? `-${id}` : ''}`);
    const target = document.querySelector('.spark') || document.body;
    target.appendChild(container);

    const root = ReactDOM.createRoot(container);
    root.render(
      <ConfigProvider
        // iconFontUrl={DEFAULT_ICON_FONT_URL}
        // locale={$i18n.language === 'zh-CN' ? zhCN : enUS}
        prefix={prefix}
        prefixCls={antPrefix}
        theme={theme}
        {...restConfigProviderProps}
      >
        {modal}
      </ConfigProvider>,
    );

    // 保存 root 实例到 container 上
    container['root'] = root;
  },
  hide: (id?: string) => {
    const { prefix = '' } = getCommonConfig();
    const prevModal = document.querySelector(
      `div[role=${prefix}-static${id ? `-${id}` : ''}]`,
    ) as HTMLElement | null;
    if (prevModal) {
      // 卸载 ReactDOM.createRoot 产生的实例
      const root = prevModal['root'] as ReactDOM.Root | undefined;
      if (root) {
        root.unmount();
      }
      prevModal.parentElement.removeChild(prevModal);
    }
  },
};
