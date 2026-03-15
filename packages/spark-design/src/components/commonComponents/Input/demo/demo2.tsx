import { Input } from '@agentscope-ai/design';
import { Flex } from 'antd';
import React from 'react';

const App: React.FC = () => (
  <Flex vertical gap="middle" style={{ width: 220 }}>
    <Input placeholder="Type here" size="small" />
    <Input placeholder="Type here" />
    <Input placeholder="Type here" size="large" />
  </Flex>
);

export default App;
