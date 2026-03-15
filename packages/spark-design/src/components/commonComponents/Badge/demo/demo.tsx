import { Avatar, Badge } from '@agentscope-ai/design';
import { Space } from 'antd';
import React from 'react';

const App: React.FC = () => (
  <Space size="middle">
    <Badge count={5}>
      <Avatar shape="square" size="large" />
    </Badge>
    <Badge dot>
      <Avatar shape="square" size="large" />
    </Badge>
  </Space>
);

export default App;
