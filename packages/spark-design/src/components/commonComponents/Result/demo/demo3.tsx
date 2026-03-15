import { Result } from '@agentscope-ai/design';

export default () => {
  return (
    <Result
      type="error"
      title="Error"
      description="Please try again later"
      okText="Retry"
    />
  );
};