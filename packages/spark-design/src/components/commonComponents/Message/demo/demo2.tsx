import { message, Button } from '@agentscope-ai/design';
import { Flex } from 'antd';

export default () => {
  return (
    <Flex align="center" justify="center" gap={16}>
      <Button
        onClick={() => {
          message.success('success');
        }}
      >
        Success
      </Button>
      <Button
        onClick={() => {
          message.info({
            content: 'info',
          });
        }}
      >
        info
      </Button>
      <Button
        onClick={() => {
          message.warning('warning');
        }}
      >
        warning
      </Button>
      <Button
        onClick={() => {
          message.error({
            content: 'error',
          });
        }}
      >
        error
      </Button>
      <Button
        onClick={() => {
          message.loading('loading');
        }}
      >
        loading
      </Button>
    </Flex>
  );
};
