import { Button } from '@agentscope-ai/design';
import React from 'react';
import AlertDialog from '..';

const App: React.FC = () => {
  return (
    <>
      <Button
        onClick={() =>
          AlertDialog.info({
            title: 'Title here',
            children: 'This information content passed into this AlertDialog.',
            centered: true,
          })
        }
      >
        Open AlertDialog(Info)
      </Button>
    </>
  );
};

export default App;
