import { Collapse as AntdCollapse, CollapseProps } from 'antd';
import { useStyle } from './index.style';

const Collapse = (props: CollapseProps) => {
  const Style = useStyle();

  return (
    <>
      <Style />
      <AntdCollapse {...props} />
    </>
  );
};

export default Collapse;
