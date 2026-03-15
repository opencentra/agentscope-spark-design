import { Button, useGlobalStyle } from '@agentscope-ai/design';
import { useState } from 'react';
const antPrefix = 'bl-ant';
export default () => {
  const [color, setColor] = useState(`var(--${antPrefix}-color-primary)`);
  useGlobalStyle({ globalStyle: `#useGlobalStyleDemo {color: ${color}}` });
  // 重复的style，head中应该只有一个dom
  useGlobalStyle({ globalStyle: `#useGlobalStyleDemo {color: ${color}}` });
  return (
    <div>
      <div id="useGlobalStyleDemo">检查文案颜色</div>
      <Button
        className="primary-btn"
        onClick={() => setColor(`var(--${antPrefix}-color-primary)`)}
      >
        主题色
      </Button>
      <Button
        className="warning-btn"
        onClick={() => setColor(`var(--${antPrefix}-color-warning)`)}
      >
        警告色
      </Button>
      <Button onClick={() => setColor('#000')}>黑色</Button>
    </div>
  );
};
