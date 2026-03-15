import { useLayoutEffect } from 'react';

// 计数styles次数，用于避免重新插入和销毁判断
const headStyleCountMaps = new Map<
  string,
  {
    id: string; // id字符串
    count: number; // 使用计数
  }
>();

interface useGlobalStyleParams {
  /** 要插入的css样式 */
  globalStyle: string;
  /** 标签上增加name标记 */
  name?: string;
}

export default function useGlobalStyle({
  globalStyle,
  name,
}: useGlobalStyleParams) {
  useLayoutEffect(() => {
    const info = headStyleCountMaps.get(globalStyle) || 0;
    if (!info) {
      const dom = document.createElement('style');
      const id = Math.random().toString(36).slice(2);
      dom.innerHTML = globalStyle;
      dom.dataset.id = id;
      dom.dataset.flag = 'bailian-ui-use-style';
      if (name) {
        dom.setAttribute('name', name);
      }
      document.head.appendChild(dom);
      headStyleCountMaps.set(globalStyle, {
        count: 1,
        id,
      });
    } else {
      headStyleCountMaps.set(globalStyle, {
        ...info,
        count: info.count + 1,
      });
    }
    return () => {
      const newInfo = headStyleCountMaps.get(globalStyle);
      headStyleCountMaps.set(globalStyle, {
        ...newInfo,
        count: newInfo.count - 1,
      });
      // 不要立即销毁，避免销毁后又立即渲染dom重复删除和创建
      setTimeout(() => {
        const info = headStyleCountMaps.get(globalStyle);
        if (info?.count <= 0) {
          headStyleCountMaps.delete(globalStyle);
          document.head.querySelector('[data-id="' + info.id + '"]')?.remove();
        }
      }, 100);
    };
  }, [globalStyle]);
}
