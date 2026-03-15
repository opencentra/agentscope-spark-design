import { Button, Popconfirm } from '@agentscope-ai/design';

import React from 'react';

const App: React.FC = () => (
  <Popconfirm
    title="Title here"
    description="Descriptive content explaining the action or outcome."
  >
    <Button>Open Popconfirm</Button>
  </Popconfirm>
);

export default App;
