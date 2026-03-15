import { Button, notification } from '@agentscope-ai/design';
import React from 'react';

const App: React.FC = () => {
  return (
    <Button onClick={() => notification.success({
      message: 'title',
      description: 'content',
      actions: (
        <Button onClick={() => alert('click next')}>Next</Button>
      )
    })}>
      Open
    </Button>
  );
};

export default App;
