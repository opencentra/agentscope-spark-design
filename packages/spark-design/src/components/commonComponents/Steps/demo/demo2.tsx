import { Steps } from '@agentscope-ai/design';
import React, { useState } from 'react';

const App: React.FC = () => {
  const [current, setCurrent] = useState(0);

  const onChange = (value: number) => {
    console.log('onChange:', value);
    setCurrent(value);
  };
  const description = 'This is a description.';

  return (
    <div style={{ width: '50%' }}>
      <Steps
        current={current}
        onChange={onChange}
        items={[
          {
            title: 'A Step',
            description,
          },
          {
            title: 'B Step',
            description,
          }
        ]}
      />
    </div>
  );
};

export default App;