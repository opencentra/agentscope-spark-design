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
        defaultValue="a"
        options={[
          {
            value: 'a',
            label: 'Qwen-Max',
            disabled: true,
          },
          {
            value: 'b',
            label: 'Qwen-Plus',
            disabled: true,
          },
          {
            value: 'c',
            label: 'Qwen-Turbo',
            disabled: true,
          },
        ]}
      ></RadioButton>
    </Flex>
  );
};

export default App;
