import { Breadcrumb } from '@agentscope-ai/design';
import React from 'react';

const App: React.FC = () => {
  return (
    <Breadcrumb
      items={[
        {
          title: 'Home',
        },
        {
          title: 'Application Center',
        },
        {
          title: 'User Profile',
          iconUrl: 'https://img.alicdn.com/imgextra/i1/O1CN01Bvwiz11YRF3tRdps9_!!6000000003055-55-tps-20-20.svg',
          dropdown: {
            items: [
              { key: 'profile', label: 'Profile' },
              { key: 'settings', label: 'Settings' },
            ],
          },
        },
      ]}
    />
  );
};

export default App;
