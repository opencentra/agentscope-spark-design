import { Alert } from '@agentscope-ai/design';

export default () => {
  return (
    <Alert
      type="info"
      message="I am a description of a component."
      closable
      showIcon
    ></Alert>
  );
};
