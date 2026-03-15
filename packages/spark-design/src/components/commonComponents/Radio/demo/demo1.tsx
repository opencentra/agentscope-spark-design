import { Radio } from '@agentscope-ai/design';
import { Flex } from 'antd';
import React from 'react';

const App: React.FC = () => (
  <Flex vertical gap="middle">
    <Radio>unselected</Radio>
    <Radio disabled>unselected disabled</Radio>
    <Radio checked>selected</Radio>
    <Radio disabled checked>
      selected disabled
    </Radio>
  </Flex>
);

export default App;
