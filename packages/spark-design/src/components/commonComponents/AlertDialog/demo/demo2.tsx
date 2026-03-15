import { Button } from '@agentscope-ai/design';
import { Flex } from 'antd';
import React from 'react';
import AlertDialog from '..';

const App: React.FC = () => {
  return (
    <Flex vertical gap={24}>
      <Button
        onClick={() =>
          AlertDialog.success({
            title: 'Title here',
            children: 'This information content passed into this AlertDialog.',
            centered: true,
          })
        }
      >
        Success
      </Button>
      <Button
        onClick={() =>
          AlertDialog.warning({
            title: 'Title here',
            children: 'This information content passed into this AlertDialog.',
            centered: true,
          })
        }
      >
        Warning
      </Button>
      <Button
        onClick={() =>
          AlertDialog.error({
            title: 'Title here',
            children: 'This information content passed into this AlertDialog.',
            centered: true,
          })
        }
      >
        Error
      </Button>
      <Button
        onClick={() =>
          AlertDialog.confirm({
            title: 'Title here',
            children: 'This information content passed into this AlertDialog.',
            centered: true,
          })
        }
      >
        Confirm
      </Button>
    </Flex>
  );
};

export default App;
