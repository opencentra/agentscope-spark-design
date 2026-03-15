import React from 'react';
import { Flex } from 'antd';
import { IconButton } from '@agentscope-ai/design';
import { SparkPlusLine } from '@agentscope-ai/icons';

/**
 * IconButton 演示组件 - 展示不同尺寸的圆形按钮
 */
const Demo3: React.FC = () => {
  return (
    <Flex
      align="center"
      justify="center"
      gap={16}
    >
      {/* Large size IconButton */}
      <IconButton
        size="large"
        shape="circle"
        icon={<SparkPlusLine />}
      />
      
      {/* Middle size IconButton */}
      <IconButton
        shape="circle"
        icon={<SparkPlusLine />}
      />
      
      {/* Small size IconButton */}
      <IconButton
        size="small"
        shape="circle"
        icon={<SparkPlusLine />}
      />
    </Flex>
  );
};

export default Demo3;
