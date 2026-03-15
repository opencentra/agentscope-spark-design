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
          title: 'An Application',
        },
      ]}
    />
  );
};

export default App;
