import { Button, Progress, Spinner } from '@agentscope-ai/design';
import { theme } from 'antd';
import React, { useEffect, useRef, useState } from 'react';

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
