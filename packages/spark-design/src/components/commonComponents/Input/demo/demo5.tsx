import { Input } from '@agentscope-ai/design';
import { Flex } from 'antd';
import React from 'react';

const App: React.FC = () => (
  <Flex
    vertical
    gap="middle"
    style={{ width: 220 }}
    align="center"
    justify="center"
  >
    <Input.TextArea placeholder="Type here" />
    <Input.TextArea placeholder="Type here" disabled />
    <Input.TextArea placeholder="Type here" status="error" />
  </Flex>
);

export default App;
