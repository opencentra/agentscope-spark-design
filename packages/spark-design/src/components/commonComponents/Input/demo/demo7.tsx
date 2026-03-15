import { Input } from '@agentscope-ai/design';
import { Flex } from 'antd';
import React from 'react';

const App: React.FC = () => {
  const onChange = (e) => {
    console.log(e.target.value);
  };

  return (
    <Flex
      vertical
      gap="24px"
      style={{ width: 320, height: '100%' }}
      align="center"
      justify="center"
    >
      <Input showCount maxLength={20} onChange={onChange} />
      <Input.TextArea
        showCount
        maxLength={100}
        onChange={onChange}
        placeholder="can resize"
      />
      <Input.TextArea
        showCount
        maxLength={100}
        onChange={onChange}
        placeholder="disable resize"
        style={{ resize: 'none' }}
      />
    </Flex>
  );
};
export default App;
