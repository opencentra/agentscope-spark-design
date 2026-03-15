import {
  Checkbox,
  CheckboxProps,
} from '@agentscope-ai/design';
import React from 'react';

const onChange: CheckboxProps['onChange'] = (e) => {
  console.log(`checked = ${e.target.checked}`);
};

const App: React.FC = () => {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
      <Checkbox indeterminate onChange={onChange}>
        Checkbox partial checked
      </Checkbox>
      <Checkbox indeterminate disabled>
        Checkbox partial checked disabled
      </Checkbox>
    </div>
  );
};

export default App;
