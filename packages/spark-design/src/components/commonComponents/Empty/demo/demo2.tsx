import { Empty } from '@agentscope-ai/design';

export default () => {
  return (
    <Empty
      type="noAccess"
      title="No Access"
      description="Please register and retry"
      okText="Retry"
    />
  );
};
