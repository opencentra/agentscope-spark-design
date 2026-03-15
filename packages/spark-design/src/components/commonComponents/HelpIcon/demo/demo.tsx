import { HelpIcon } from '@agentscope-ai/design';
import { Flex } from 'antd';

export default () => {
  return (
    <>
      基础用法：
      <br />
      <Flex align="center" gap={2}>
        <span>功能1</span>
        <HelpIcon content="这是一段文本解释这是一段文本解释这是一段文本解释这是一段文本解释" />
      </Flex>
    </>
  );
};
