import { Input } from '@agentscope-ai/design';
import { Flex } from 'antd';
import React from 'react';

const App: React.FC = () => (
  <Flex vertical gap="middle" style={{ width: 220 }}>
    <Input placeholder="Type here" shape="round" />
    <Input placeholder="Type here" disabled shape="round" />
    <Input placeholder="Type here" status="error" shape="round" />
  </Flex>
);

export default App;
