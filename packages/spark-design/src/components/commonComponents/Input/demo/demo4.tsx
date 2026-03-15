import { Input } from '@agentscope-ai/design';
import { SparkSearchLine } from '@agentscope-ai/icons';
import { Flex } from 'antd';
import React from 'react';

const App: React.FC = () => (
  <Flex vertical gap="middle" style={{ width: 220 }}>
    <Input
      placeholder="Type here"
      prefix={<SparkSearchLine style={{ fontSize: '18px' }} />}
    />
    <Input
      placeholder="Type here"
      disabled
      prefix={<SparkSearchLine style={{ fontSize: '18px' }} />}
    />
    <Input
      placeholder="Type here"
      status="error"
      prefix={<SparkSearchLine style={{ fontSize: '18px' }} />}
    />
  </Flex>
);

export default App;
