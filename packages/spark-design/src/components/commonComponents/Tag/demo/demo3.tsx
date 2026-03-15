import { Tag } from '@agentscope-ai/design';
import { SparkEffciencyLine, SparkFalseLine } from '@agentscope-ai/icons';
import { Flex } from 'antd';

export default () => {
  return (
    <Flex vertical align="center" gap={16}>
      <Tag closeIcon={<SparkFalseLine style={{ fontSize: '20px' }} />}>
        Tag MD
      </Tag>
      <Tag
        icon={<SparkEffciencyLine style={{ fontSize: '20px' }} />}
        closeIcon={<SparkFalseLine style={{ fontSize: '20px' }} />}
      >
        Tag MD
      </Tag>
    </Flex>
  );
};
