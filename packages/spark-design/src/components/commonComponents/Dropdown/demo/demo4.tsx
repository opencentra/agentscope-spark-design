import React from 'react';
import { Dropdown, Button } from '@agentscope-ai/design';

/**
 * Dropdown悬停状态演示
 * 展示带有图标的菜单项在悬停状态下的效果
 */
const Demo4: React.FC = () => {

  const menuItems = [
    {
      key: '1',
      label: 'Menu Item',
    },
    {
      key: '2', 
      label: 'Menu Item',
    },
    {
      key: '3',
      label: 'Menu Item', 
    },
  ];

  return (
    <Dropdown
      menu={{
        items: menuItems,
        selectable: true,
        multiple: true,
      }}
    >
      <Button>Dropdown Trigger</Button>
    </Dropdown>
  );
};

export default Demo4;
