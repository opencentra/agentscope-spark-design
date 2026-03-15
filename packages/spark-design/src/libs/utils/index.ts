import React from 'react';
export function isIntl() {
  return window.g_config?.isIntl || false;
}

export const copy = (text: string) => {
  if (navigator.clipboard) {
    navigator.clipboard.writeText(text);
  } else {
    const textarea = document.createElement('textarea');
    document.body.appendChild(textarea);
    // 隐藏此输入框
    textarea.style.position = 'fixed';
    textarea.style.clip = 'rect(0 0 0 0)';
    textarea.style.top = '10px';
    // 赋值
    textarea.value = text;
    // 选中
    textarea.select();
    // 复制
    document.execCommand('copy', true);
    // 移除输入框
    document.body.removeChild(textarea);
  }
};

export const renderTooltip = (
  title: string | JSX.Element,
  extraProps: any = {},
) => {
  const { maxWidth, maxHeight, ...extra } = extraProps;
  return {
    overlayInnerStyle: {
      maxWidth: maxWidth || 326,
      maxHeight: maxHeight || 150,
      overflowY: 'auto',
      padding: '6px 12px',
    },
    title,
    arrow: false,
    ...extra,
  };
};

export function isElement(e: any): e is JSX.Element {
  return React.isValidElement(e);
}

export function isSafari(agent?: any) {
  const _agent = agent || navigator.userAgent;
  return /^((?!chrome|android).)*safari/i.test(_agent);
}

// 小于10补零
export const addZreo = (num: number) => {
  return num >= 10 ? num : `0${num}`;
};

// 时间秒转化为0:00格式
export const initSeconed = (seconds: number) => {
  if (seconds < 60) {
    const num = Math.ceil(seconds);
    return `0:${addZreo(num)}`;
  }
  const minutes = Math.floor(seconds / 60);
  const rest = Math.ceil(seconds % 60);
  return `${addZreo(minutes)}:${addZreo(rest)}`;
};
