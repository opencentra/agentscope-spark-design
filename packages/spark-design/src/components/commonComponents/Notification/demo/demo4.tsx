import { Button, notification } from '@agentscope-ai/design';
import { Flex } from 'antd';
import React from 'react';

const App: React.FC = () => {
  return (
    <Flex vertical gap={48}>
      <Flex justify="space-between" style={{width: 320}}>
        <Button
          onClick={() => notification.success({
            message: 'title',
            description: 'content',
            placement: 'topLeft',
          })}
        >
          topLeft
        </Button>
        <Button
          onClick={() => notification.success({
            message: 'title',
            description: 'content',
            placement: 'top',
          })}
        >
          top
        </Button>
        <Button
          onClick={() => notification.success({
            message: 'title',
            description: 'content',
            placement: 'topRight',
          })}
        >
          topRight
        </Button>
      </Flex>
      <Flex justify="space-between" style={{width: 320}}>
        <Button
          onClick={() => notification.success({
            message: 'title',
            description: 'content',
            placement: 'bottomLeft',
          })}
        >
          bottomLeft
        </Button>
        <Button
          onClick={() => notification.success({
            message: 'title',
            description: 'content',
            placement: 'bottom',
          })}
        >
          bottom
        </Button>
        <Button
          onClick={() => notification.success({
            message: 'title',
            description: 'content',
            placement: 'bottomRight',
          })}
        >
          bottomRight
        </Button>
      </Flex>
    </Flex>
  );
};

export default App;
