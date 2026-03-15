import { Skeleton } from '@agentscope-ai/design';
import React from 'react';

const App: React.FC = () => (
  <div style={{width: '100%', padding:'0 68px'}}>
    <Skeleton 
      active 
      paragraph={{ rows: 3 }}
      title={false}
    />
  </div>
);

export default App;
