import { Result } from '@agentscope-ai/design';

export default () => {
  return (
    <Result
      type="failed"
      title="Failed"
      description="Please try later..."
      okText="Retry"
    />
  );
};