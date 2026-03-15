import { IconFont } from '@agentscope-ai/design';
import { Flex } from 'antd';

export default () => {
  return (
    <Flex gap={8}>
      isCursorPointer
      <IconFont type="spark-userGroup-fill" isCursorPointer size="small" />
      <IconFont type="spark-userGroup-fill" isCursorPointer />
    </Flex>
  );
};
