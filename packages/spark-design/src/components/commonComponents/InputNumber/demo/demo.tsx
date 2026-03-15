import { InputNumber } from '@agentscope-ai/design';
import type { InputNumberProps } from 'antd';
import { Flex } from 'antd';
import React from 'react';

const onChange: InputNumberProps['onChange'] = (value) => {
  console.log('changed', value);
};

const onChange1: InputNumberProps['onChange'] = (value) => {
  console.log('changed', value);
};

const App: React.FC = () => {
  return (
    <Flex vertical gap="middle" align="center" justify="center">
      <InputNumber min={1} max={10} defaultValue={6} onChange={onChange} />

      <InputNumber
        min={1}
        max={10}
        defaultValue={6}
        onChange={onChange1}
        disabled={true}
      />
    </Flex>
  );
};

export default App;
