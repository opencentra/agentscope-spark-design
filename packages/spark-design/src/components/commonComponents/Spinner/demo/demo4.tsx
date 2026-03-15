import { Button, Progress, Spinner } from '@agentscope-ai/design';
import { theme } from 'antd';
import React, { useEffect, useRef, useState } from 'react';

// 添加旋转动画样式
const spinKeyframes = `
  @keyframes spin {
    from {
      transform: rotate(0deg);
    }
    to {
      transform: rotate(360deg);
    }
  }
`;

// 将样式注入到页面中
if (typeof document !== 'undefined') {
  const style = document.createElement('style');
  style.textContent = spinKeyframes;
  document.head.appendChild(style);
}

const App: React.FC = () => {
  const [percent, setPercent] = useState(0);
  const [spinning, setSpinning] = useState(true);
  const timerRef = useRef<NodeJS.Timeout | null | number>(null);
  const { token } = theme.useToken();
  useEffect(() => {
    return () => {
      clearInterval(timerRef.current);
      timerRef.current = null;
    };
  }, []);
  useEffect(() => {
    if (spinning) {
      timerRef.current = setInterval(() => {
        setPercent((prevPercent) => (prevPercent >= 100 ? 0 : prevPercent + 1));
      }, 100);
    } else {
      clearInterval(timerRef.current);
      timerRef.current = null;
    }
  }, [spinning]);

  return (
    <div
      style={{
        width: '100%',
        height: '100%',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        background: token.colorBgBase,
      }}
    >
      <Spinner
        indicator={
          <img
            src="https://img.alicdn.com/imgextra/i4/O1CN01wnPSEe1fK6CJxV4Xa_!!6000000003987-55-tps-40-40.svg"
            style={{
              animation: 'spin 1s linear infinite',
            }}
          />
        }
        spinning={spinning}
        tip={
          spinning ? (
            <div>
              <span>
                File uploading
                <span
                  style={{
                    display: 'inline-block',
                    width: '24px',
                    textAlign: 'center',
                  }}
                >
                  {percent}
                </span>
                % ...
              </span>
              <Button type="link" onClick={() => setSpinning(false)}>
                Cancel
              </Button>
              <Progress percent={percent} showInfo={false}></Progress>
            </div>
          ) : undefined
        }
      />
    </div>
  );
};

export default App;
