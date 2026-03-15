import { Button, Progress, Spinner } from '@agentscope-ai/design';
import { theme } from 'antd';
import React, { useEffect, useState } from 'react';

const App: React.FC = () => {
  const [percent, setPercent] = useState(0);
  const { token } = theme.useToken();

  useEffect(() => {
    const timer = setInterval(() => {
      setPercent((prevPercent) => (prevPercent >= 100 ? 0 : prevPercent + 1));
    }, 100);

    return () => clearInterval(timer);
  }, []);

  return (
    <Spinner
      tip={
        <div>
          <span>
            File uploading{' '}
            <span style={{ display: 'inline-block', width: '24px' }}>
              {percent}
            </span>
            % ...
          </span>
          <Button type="link">Cancel</Button>
          <Progress percent={percent} showInfo={false}></Progress>
        </div>
      }
    >
      <div
        style={{
          width: '560px',
          height: '240px',
          background: `repeating-linear-gradient(135deg, ${token.colorBorderSecondary} 0, ${token.colorBorderSecondary} 1px, ${token.colorBgBase} 1px, ${token.colorBgBase} 15px)`,
          backgroundSize: 'auto',
          backgroundPosition: 'top left',
          backgroundRepeat: 'no-repeat',
          overflow: 'hidden',
          borderRadius: '6px',
          border: `1px solid ${token.colorBorderSecondary}`,
        }}
      ></div>
    </Spinner>
  );
};

export default App;
