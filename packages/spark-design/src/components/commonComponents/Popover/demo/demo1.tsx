import { Button, Popover } from '@agentscope-ai/design';
import { Flex } from 'antd';
import React from 'react';

const App: React.FC = () => {
  const content = (
    <Flex
      justify="center"
      align="center"
      style={{
        width: 200,
        height: 120,
        backgroundColor: 'rgba(205, 208, 220, 0.15)',
      }}
    >
      <p>Content</p>
    </Flex>
  );

  return (
    <Popover content={content} title="Title">
      <Button>Hover me</Button>
    </Popover>
  );
};

export default App;
