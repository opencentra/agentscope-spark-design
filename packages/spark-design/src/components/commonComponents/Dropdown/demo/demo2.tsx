import React from 'react';
import { Dropdown, Button } from '@agentscope-ai/design';
import { SparkTreasureLine } from '@agentscope-ai/icons';

/**
 * Dropdown组件演示 - 带图标菜单
 */
const Demo2: React.FC = () => {

  // 菜单配置项
  const menuItems = [
    {
      key: '1',
      label: 'Menu Item',
      icon: <SparkTreasureLine style={{ fontSize: 20 }} />,
    },
    {
      key: '2', 
      label: 'Menu Item',
      icon: <SparkTreasureLine style={{ fontSize: 20 }} />,
    },
    {
      key: '3',
      label: 'Menu Item', 
      icon: <SparkTreasureLine style={{ fontSize: 20 }} />,
    },
  ];

  return (
    <Dropdown
      menu={{ items: menuItems }}
    >
      <Button>Dropdown Trigger</Button>
    </Dropdown>
  );
};

export default Demo2;