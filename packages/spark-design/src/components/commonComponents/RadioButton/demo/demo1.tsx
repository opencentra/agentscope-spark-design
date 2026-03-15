import type { RadioChangeEvent } from 'antd';
import { Flex } from 'antd';
import React from 'react';
import RadioButton from '../index';

const onChange = (e: RadioChangeEvent) => {
  console.log(`radio checked:${e.target.value}`);
};

const App: React.FC = () => {
  return (
    <Flex vertical gap="middle">
      <RadioButton
        onChange={onChange}
        defaultValue="max"
        options={[
          {
            value: 'max',
            label: 'Qwen-Max',
          },
          {
            value: 'plus',
            label: 'Qwen-Plus',
          },
          {
            value: 'turbo',
            label: 'Qwen-Turbo',
          },
        ]}
      ></RadioButton>
    </Flex>
  );
};

export default App;
