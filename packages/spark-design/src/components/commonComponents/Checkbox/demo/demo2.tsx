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
    <Checkbox 
      onChange={onChange}
      description="You agree to our Terms of Service and Privacy Policy."
    >
      Accept terms and conditions
    </Checkbox>
  );
};

export default App;
