import { message, Button } from '@agentscope-ai/design';
import { Flex } from 'antd';

export default () => {
  return (
    <Flex align="center" justify="center" gap={20}>
      <Button
        onClick={() => {
          message.success({
            content: (
              <Flex gap={8}>
                <span>task status</span>
                <span
                  onClick={() => alert('click view')}
                  style={{
                    fontWeight: 'bold',
                    cursor: 'pointer',
                    color: 'var(--sps-color-info)',
                  }}
                >
                  view
                </span>
              </Flex>
            )
          });
        }}
      >
        Click
      </Button>
    </Flex>
  );
};
