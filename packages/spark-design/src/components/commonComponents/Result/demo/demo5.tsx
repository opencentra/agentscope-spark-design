import { Result } from '@agentscope-ai/design';

export default () => {
  return (
    <Result
      type="404"
      title="404"
      description="Please try again later"
      okText="Retry"
    />
  );
};