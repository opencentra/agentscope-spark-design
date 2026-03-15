import { Empty } from '@agentscope-ai/design';

export default () => {
  return (
    <Empty
      type="noData"
      title="No Data"
      description="Please try later..."
      okText="Retry"
    />
  );
};
