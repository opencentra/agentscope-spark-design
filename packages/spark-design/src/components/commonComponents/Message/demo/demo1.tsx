import { message, Button } from '@agentscope-ai/design';

export default () => {
  return (
    <Button
      onClick={() => {
        message.success('task status');
      }}
    >
      Success
    </Button>
  );
};
