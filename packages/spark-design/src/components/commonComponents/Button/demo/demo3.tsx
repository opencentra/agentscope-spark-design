import { Button } from '@agentscope-ai/design';
import { Flex } from 'antd';

export default () => {
  return (
    <Flex gap={16} align="center">
      <Button>Button MD</Button>
      <Button size="small">Button SM</Button>
    </Flex>
  );
};
