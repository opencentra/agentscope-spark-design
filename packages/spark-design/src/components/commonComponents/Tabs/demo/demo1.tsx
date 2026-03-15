import { Tabs, type TabsProps } from '@agentscope-ai/design';
import React from 'react';

const onChange = (key: string) => {
  console.log(key);
};

const items: TabsProps['items'] = [
  {
    key: '1',
    label: 'Tab 1',
    children: '',
  },
  {
    key: '2',
    label: 'Tab 2',
    children: '',
  }
];

const App: React.FC = () => {
  return (
    <Tabs
      defaultActiveKey="1"
      items={items}
      onChange={onChange}
      type="segmented"
    />
  );
};

export default App;
