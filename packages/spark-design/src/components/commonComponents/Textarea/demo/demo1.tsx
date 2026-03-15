import { Input } from '@agentscope-ai/design';
import { theme } from 'antd';
import React from 'react';

const { TextArea } = Input;

const App: React.FC = () => {
  const token = theme.useToken();
  return (
    <>
      <div
        style={{
          fontSize: '13px',
          fontWeight: '500',
          lineHeight: '20px',
          /* 中性色/color-text */
          color: token.token.colorText,
          marginBottom: '8px',
        }}
      >
        Your Title
      </div>
      <TextArea rows={4} placeholder="Type your message here" />
      <div
        style={{
          fontSize: '12px',
          fontWeight: 'normal',
          lineHeight: '18px',
          color: token.token.colorTextSecondary,
          marginTop: '8px',
        }}
      >
        Your message will be copied to the support team.
      </div>
    </>
  );
};

export default App;
