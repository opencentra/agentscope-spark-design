import { Button, Popconfirm } from '@agentscope-ai/design';
import { Flex } from 'antd';

import React from 'react';

const App: React.FC = () => (
  <Flex vertical gap={24}>
    <Popconfirm
      title="Title here"
      description="Descriptive content explaining the action or outcome."
      type="info"
    >
      <Button>Info</Button>
    </Popconfirm>
    <Popconfirm
      title="Title here"
      description="Descriptive content explaining the action or outcome."
      type="success"
    >
      <Button>Success</Button>
    </Popconfirm>
    <Popconfirm
      title="Title here"
      description="Descriptive content explaining the action or outcome."
      type="warning"
      okText="Primary Danger"
    >
      <Button>Warning</Button>
    </Popconfirm>
    <Popconfirm
      title="Title here"
      description="Descriptive content explaining the action or outcome."
      type="error"
      okText="Primary Danger"
    >
      <Button>Error</Button>
    </Popconfirm>
    <Popconfirm
      title="Title here"
      description="Descriptive content explaining the action or outcome."
    >
      <Button>Confirm</Button>
    </Popconfirm>
  </Flex>
);

export default App;
