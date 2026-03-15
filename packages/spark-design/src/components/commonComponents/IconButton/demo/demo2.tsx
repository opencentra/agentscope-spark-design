import React from 'react';
import { Flex } from 'antd';
import { IconButton } from '@agentscope-ai/design';
import { SparkPlusLine } from '@agentscope-ai/icons';

const Demo2: React.FC = () => {
  return (
    <Flex 
      justify="center" 
      align="center" 
      gap={16}
    >
      <IconButton
        size="large"
        shape="default"
        icon={<SparkPlusLine />}
      />
      <IconButton
        size="middle"
        shape="default"
        icon={<SparkPlusLine />}
      />
      <IconButton
        size="small"
        shape="default"
        icon={<SparkPlusLine />}
      />
    </Flex>
  );
};

export default Demo2;
