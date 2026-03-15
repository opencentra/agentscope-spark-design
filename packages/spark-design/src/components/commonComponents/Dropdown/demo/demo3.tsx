import React from 'react';
import { Dropdown, Button } from '@agentscope-ai/design';
import { SparkTreasureLine, SparkDeleteLine } from '@agentscope-ai/icons';

const Demo3: React.FC = () => {

  const items = [
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
      icon: <SparkDeleteLine style={{ fontSize: 20 }} />,
      danger: true,
    },
  ];

  return (
    <Dropdown 
      menu={{ items }}
    >
      <Button>Dropdown Trigger</Button>
    </Dropdown>
  );
};

export default Demo3;
