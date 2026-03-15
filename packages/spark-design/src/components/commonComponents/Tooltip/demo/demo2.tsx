import { Button, Tooltip } from '@agentscope-ai/design';
import { Flex } from 'antd';
import React from 'react';

const App: React.FC = () => (
  <Tooltip
    title={
      <Flex align="center" gap={8}>
        <span>This is a tooltip</span>
        <Button
          type="link"
          style={{ height: 20, lineHeight: '20px', padding: 0 }}
        >
          Operation
        </Button>
      </Flex>
    }
  >
    <Button>Hover here</Button>
  </Tooltip>
);

export default App;
