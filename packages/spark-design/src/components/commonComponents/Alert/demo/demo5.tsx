import { Alert, Button } from '@agentscope-ai/design';

export default () => {
  return (
    <Alert
      type="info"
      message="I am a description of a component."
      closable
      showIcon
      action={
        <Button type="textCompact" size="small">
          Text Compact
        </Button>
      }
    ></Alert>
  );
};
