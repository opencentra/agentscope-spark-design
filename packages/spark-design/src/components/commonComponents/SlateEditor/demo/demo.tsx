import { SlateEditor } from '@agentscope-ai/design';
import { useState } from 'react';

export default () => {
  const [value, setValue] = useState('${hello}');

  return (
    <SlateEditor
      value={value}
      onChange={(val) => {
        setValue(val);
      }}
    />
  );
};
