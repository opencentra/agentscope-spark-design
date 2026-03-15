import { Progress } from '@agentscope-ai/design';
import { Flex } from 'antd';
import React from 'react';

const App: React.FC = () => (
  <Flex style={{ width: '200px' }} vertical>
    <Progress percent={50} showInfo={false} />
  </Flex>
);

export default App;
