import { Statistic as AntdStatistic, StatisticProps } from 'antd';
import { useStyle } from './index.style';

const Statistic = (props: StatisticProps) => {
  const Style = useStyle();

  return (
    <>
      <Style />
      <AntdStatistic {...props} />
    </>
  );
};

export default Statistic;
