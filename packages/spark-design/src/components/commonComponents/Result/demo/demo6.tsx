import { Result } from '@agentscope-ai/design';

export default () => {
  return (
    <Result
      type="networkError"
      title="Network Error"
      description="Please try later..."
      okText="Retry"
    />
  );
};