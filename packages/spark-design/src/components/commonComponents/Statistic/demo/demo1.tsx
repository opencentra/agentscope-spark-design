import { Statistic } from '@agentscope-ai/design';

export default () => {
  return (
    <div style={{ display: 'flex', gap: 48 }}>
      <Statistic title="Active Users" value={112893} />
      <Statistic title="Account Balance (CNY)" value={112893.0} />
    </div>
  );
};
