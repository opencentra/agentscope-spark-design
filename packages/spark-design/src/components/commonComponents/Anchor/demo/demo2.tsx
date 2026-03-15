import React from 'react';
import { Anchor } from '@agentscope-ai/design';

const Demo1: React.FC = () => {
  const items = [
    {
      key: 'anchor-item-1',
      href: '#anchor-item-1',
      title: 'Anchor item',
    },
    {
      key: 'anchor-item-2', 
      href: '#anchor-item-2',
      title: 'Anchor item',
    },
    {
      key: 'anchor-item-3',
      href: '#anchor-item-3', 
      title: 'Anchor item',
    },
  ];

  return (
    <>
      <Anchor
        onClick={e => e.preventDefault()}
        direction="horizontal"
        items={items}
      />
    </>
  );
};

export default Demo1;
