import { getCommonConfig } from '@agentscope-ai/design/config';
import { SparkInfoLine } from '@agentscope-ai/icons';
import { type PopoverProps } from 'antd';
import classNames from 'classnames';
import { CSSProperties, ReactNode } from 'react';
import IconButton from '../IconButton';
import { useStyle as useIconFontStyle } from '../IconFont/index.style';
import Tooltip from '../Tooltip';
import { useStyle } from './index.style';

export interface HelpIconProps {
  content: ReactNode;
  className?: string;
  popoverProps?: PopoverProps;
  style?: CSSProperties;
}
export default function HelpIcon(props: HelpIconProps) {
  const IconFontStyle = useIconFontStyle();
  const Style = useStyle();
  const { style, content, className, popoverProps } = props;
  const { sparkPrefix } = getCommonConfig();
  return (
    <>
      <IconFontStyle />
      <Style />
      <Tooltip
        title={content}
        overlayInnerStyle={{ maxWidth: 376 }}
        trigger={'hover'}
        style={style}
        {...popoverProps}
      >
        <IconButton
          className={classNames(`${sparkPrefix}-help-icon`, className)}
          icon={<SparkInfoLine />}
          shape="circle"
          bordered={false}
          size="small"
        ></IconButton>
      </Tooltip>
    </>
  );
}
