import { Button, notification } from '@agentscope-ai/design';
import { Flex } from 'antd';
import React from 'react';

const App: React.FC = () => {
  return (
    <Flex gap={16}>
      <Button onClick={() => notification.success({
        message: 'title',
        description: 'content',
        duration: 0,
      })}>
        Success
      </Button>
      <Button onClick={() => notification.info({
        message: 'title',
        description: 'content',
      })}>Info</Button>
      <Button onClick={() => notification.warning({
        message: 'title',
        description: 'content',
      })}>Warning</Button>
      <Button onClick={() => notification.error({
        message: 'title',
        description: 'content',
      })}>Error</Button>
    </Flex>
  );
};

export default App;
