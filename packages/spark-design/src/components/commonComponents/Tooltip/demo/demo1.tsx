import { Button, Tooltip } from '@agentscope-ai/design';
import React from 'react';

const App: React.FC = () => (
  <Tooltip title="This is a tooltip">
    <Button>Hover here</Button>
  </Tooltip>
);

export default App;
