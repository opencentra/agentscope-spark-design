import { Checkbox, CheckboxProps } from '@agentscope-ai/design';
import React from 'react';

const onChange: CheckboxProps['onChange'] = (e) => {
  console.log(`checked = ${e.target.checked}`);
};

const App: React.FC = () => {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
      <Checkbox onChange={onChange}>Checkbox normal</Checkbox>
      <Checkbox onChange={onChange} checked disabled>
        Checkbox checked disabled
      </Checkbox>
      <Checkbox onChange={onChange} disabled>
        Checkbox unchecked disabled
      </Checkbox>
    </div>
  );
};

export default App;
