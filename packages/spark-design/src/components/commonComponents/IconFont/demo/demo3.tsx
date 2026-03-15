import { IconFont } from '@agentscope-ai/design';
import { Flex } from 'antd';

export default () => {
  return (
    <Flex gap={8}>
      spin
      <IconFont type="spark-loading-line" spin size="small" />
      <IconFont type="spark-loading-line" spin />
    </Flex>
  );
};
