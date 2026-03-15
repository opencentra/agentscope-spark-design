import { Switch } from '@agentscope-ai/design';
import { Flex } from 'antd';
import { useState } from 'react';

export default () => {
  const [checked, setChecked] = useState(true);
  return (
    <Flex vertical gap={16}>
      <Switch
        checked={checked}
        onChange={(checked) => setChecked(checked)}
        label="Switch MD"
      />
      <Switch
        size="small"
        checked={checked}
        onChange={(checked) => setChecked(checked)}
        label="Switch SM"
      />
    </Flex>
  );
};
