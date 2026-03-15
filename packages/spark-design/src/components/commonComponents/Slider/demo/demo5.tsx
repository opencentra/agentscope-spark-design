import { Slider } from '@agentscope-ai/design';
import React, { useState } from 'react';

const App: React.FC = () => {
  const [value, setValue] = useState<number>(10);

  return (
    <Slider.Input
      min={1}
      max={20}
      step={1}
      marks={{}}
      onChange={(val) => {
        setValue(val);
      }}
      value={value}
      styles={{
        wrapper: {
          width: '320px',
        },
        inputNumber: {
          width: '80px',
        },
      }}
    />
  );
};

export default App;
