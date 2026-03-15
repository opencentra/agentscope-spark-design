import { IconButton } from '@agentscope-ai/design';
import {
  SparkPlusLine,
  SparkSearchLine,
  SparkSettingLine,
} from '@agentscope-ai/icons';
import { Flex } from 'antd';

export default () => {
  return (
    <Flex gap={16} vertical>
      <Flex gap={16} justify="center" align="center">
        <IconButton icon={<SparkPlusLine />} bordered={false}/>
        <IconButton icon={<SparkSettingLine />} bordered={false}/>
        <IconButton icon={<SparkSearchLine />} bordered={false}/>
      </Flex>
      <Flex gap={16} justify="center" align="center">
        <IconButton icon={<SparkPlusLine />} disabled bordered={false}/>
        <IconButton icon={<SparkSettingLine />} disabled bordered={false}/>
        <IconButton icon={<SparkSearchLine />} disabled bordered={false}/>
      </Flex>
    </Flex>
  );
};
