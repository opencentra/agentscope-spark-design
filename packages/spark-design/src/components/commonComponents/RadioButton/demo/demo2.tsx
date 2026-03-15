import type { RadioChangeEvent } from 'antd';
import { Flex, Radio } from 'antd';
import React from 'react';
import RadioButton from '../index';

const onChange = (e: RadioChangeEvent) => {
  console.log(`radio checked:${e.target.value}`);
};

const App: React.FC = () => {
  return (
    <Flex vertical gap="16px">
      <RadioButton onChange={onChange} defaultValue="a" size="large">
        <Radio.Button value="a">Qwen-Max</Radio.Button>
        <Radio.Button value="b">Qwen-Plus</Radio.Button>
        <Radio.Button value="c">Qwen-Turbo</Radio.Button>
      </RadioButton>
      <RadioButton onChange={onChange} defaultValue="a" size="middle">
        <Radio.Button value="a">Qwen-Max</Radio.Button>
        <Radio.Button value="b">Qwen-Plus</Radio.Button>
        <Radio.Button value="c">Qwen-Turbo</Radio.Button>
      </RadioButton>
      <RadioButton onChange={onChange} defaultValue="a" size="small">
        <Radio.Button value="a">Qwen-Max</Radio.Button>
        <Radio.Button value="b">Qwen-Plus</Radio.Button>
        <Radio.Button value="c">Qwen-Turbo</Radio.Button>
      </RadioButton>
    </Flex>
  );
};

export default App;
