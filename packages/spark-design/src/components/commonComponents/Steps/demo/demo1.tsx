import { Steps } from '@agentscope-ai/design';
import React, { useState } from 'react';

const App: React.FC = () => {
  const [current, setCurrent] = useState(0);

  const onChange = (value: number) => {
    console.log('onChange:', value);
    setCurrent(value);
  };

  return (
    <div style={{ width: '50%' }}>
      <Steps
        current={current}
        onChange={onChange}
        items={[
          {
            title: 'A Step'
          },
          {
            title: 'B Step'
          }
        ]}
      />
    </div>
  );
};

export default App;