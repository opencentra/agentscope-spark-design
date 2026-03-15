import React from 'react';
import { Dropdown, Button } from '@agentscope-ai/design';

export default () => {
  // 第一个下拉菜单的菜单项，包含子菜单
  const menu1Items = [
    {
      key: '1',
      label: 'Menu Item',
      children: [
        {
          key: '1-1',
          label: 'Sub Menu Item',
        },
        {
          key: '1-2',
          label: 'Sub Menu Item',
        },
      ],
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
    <Dropdown menu={{ items: menu1Items }} trigger={['click']}>
      <Button>Dropdown Trigger</Button>
    </Dropdown>
  );
};
