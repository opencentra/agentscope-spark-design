import { Statistic } from '@agentscope-ai/design';
import { SparkPieChartLine } from '@agentscope-ai/icons';

export default () => {
  return (
    <div style={{ display: 'flex', gap: 48 }}>
      <Statistic
        title="Feedback"
        value={366}
        prefix={
          <div style={{ display: 'flex', alignItems: 'center', fontSize: 20 }}>
            <SparkPieChartLine />
          </div>
        }
      />
      <Statistic title="Unmerged" value={93} suffix=" / 1000" />
    </div>
  );
};
