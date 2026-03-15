import { Result } from '@agentscope-ai/design';

export default () => {
  return (
    <Result
      type="inProgress"
      title="In Progress"
      description="Please try later..."
      okText="Retry"
    />
  );
};