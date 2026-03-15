import { Button } from '@agentscope-ai/design';
import { Flex } from 'antd';

export default () => {
  return (
    <Flex gap={16} align="center">
      <Button type="textCompact">Button MD</Button>
      <Button type="textCompact" size="small">
        Button SM
      </Button>
    </Flex>
  );
};
