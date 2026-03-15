import { Input } from '@agentscope-ai/design';
import { Flex } from 'antd';
import React, { useState } from 'react';

const App: React.FC = () => {
  const [value, setValue] = useState('');

  return (
    <Flex vertical gap="middle" style={{ width: 320 }}>
      <Input.TextArea
        placeholder="Autosize height based on content lines"
        autoSize
      />
      <Input.TextArea
        placeholder="Autosize height with minimum and maximum number of lines"
        autoSize={{ minRows: 2, maxRows: 6 }}
      />
      <Input.TextArea
        value={value}
        onChange={(e) => setValue(e.target.value)}
        placeholder="Controlled autosize"
        autoSize={{ minRows: 3, maxRows: 5 }}
      />
    </Flex>
  );
};
export default App;
