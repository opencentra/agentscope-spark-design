import { Tabs, type TabsProps } from '@agentscope-ai/design';
import React from 'react';

const onChange = (key: string) => {
  console.log(key);
};

const items1: TabsProps['items'] = [
  {
    key: '1',
    label: 'Tab LG',
    children: '',
  },
  {
    key: '2',
    label: 'Tab LG',
    children: '',
  }
];

const items2: TabsProps['items'] = [
  {
    key: '1',
    label: 'Tab MD',
    children: '',
  },
  {
    key: '2',
    label: 'Tab MD',
    children: '',
  },
];

const App: React.FC = () => {
  return (
    <div style={{ display: 'flex', flexDirection: 'row', gap: '32px', alignItems: 'center' }}>
      <Tabs defaultActiveKey="1" items={items1} onChange={onChange} size="large" type="line" />
      <Tabs defaultActiveKey="1" items={items2} onChange={onChange} size="middle" type="line" />
    </div>
  );
};

export default App;
