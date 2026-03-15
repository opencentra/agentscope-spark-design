import { Button } from '@agentscope-ai/design';
import { Flex } from 'antd';

export default () => {
  return (
    <Flex gap={16} align="center">
      <Button type="primary">Button MD</Button>
      <Button type="primary" size="small">
        Button SM
      </Button>
    </Flex>
  );
};
