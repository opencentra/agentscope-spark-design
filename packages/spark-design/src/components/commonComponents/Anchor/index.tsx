import { Anchor, AnchorProps } from 'antd';
import { forwardRef } from 'react';
import { useStyle } from './index.style';

export type { AnchorProps };

const SparkAnchor = forwardRef<any, AnchorProps>((props) => {
  const Style = useStyle();

  return (
    <>
      <Style />
      <Anchor {...props} />
    </>
  );
});

export default SparkAnchor;
