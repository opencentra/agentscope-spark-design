import { Upload } from '@agentscope-ai/design';
import { SparkUploadLine } from '@agentscope-ai/icons';
import { Flex } from 'antd';

export default () => (
  <Upload listType="picture-card" beforeUpload={() => Upload.LIST_IGNORE}>
    <Flex vertical gap={8} align="center">
      <SparkUploadLine style={{ fontSize: '24px' }} />
      Upload
    </Flex>
  </Upload>
);
