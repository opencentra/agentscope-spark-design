import { getCommonConfig } from '@/config';
import { createFromIconfontCN } from '@agentscope-ai/icons-override-antd';
import { IconFontProps } from '@agentscope-ai/icons-override-antd/lib/components/IconFont';
import classNames from 'classnames';
import React, { CSSProperties } from 'react';
import { useStyle } from './index.style';

export interface SparkIconFontProps
  extends React.HTMLAttributes<HTMLDivElement> {
  /**
   * @type string
   * @description iconfont里的symbpl名称
   * @default false
   */
  type: string;
  /**
   * @type 'large' | 'middle' | 'small' | CSSProperties['fontSize']
   * @description 尺寸大小，支持固定三种尺寸，或直接传入fontSize的值
   * @default 'middle'
   */
  size?: 'large' | 'middle' | 'small' | CSSProperties['fontSize'];
  /**
   * @type boolean
   * @description 设置cursor: pointer, 以及默认和hover的color
   * @default false
   */
  isCursorPointer?: boolean;
  /**
   * @type boolean
   * @description 是否旋转
   * @default false
   */
  spin?: boolean;
}

let iconFontInstance: React.FC<IconFontProps<string>>;
function getIconFontInstance(url) {
  if (!iconFontInstance) {
    iconFontInstance = createFromIconfontCN({
      scriptUrl: url,
    });
  }
  return iconFontInstance;
}
export default function IconFont(props: SparkIconFontProps) {
  const {
    type,
    className = '',
    isCursorPointer = false,
    spin,
    size,
    ...rest
  } = props;
  const { sparkPrefix, iconfont } = getCommonConfig();
  const Style = useStyle();

  return (
    <>
      <Style />
      {React.createElement(getIconFontInstance(iconfont), {
        type,
        style: {
          fontSize: size,
          ...props.style,
        },
        className: classNames(
          isCursorPointer && `${sparkPrefix}-cursor-pointer`,
          className,
          `${sparkPrefix}-icon`,
          { [`${sparkPrefix}-icon-spin`]: spin },
        ),
        ...rest,
      })}
    </>
  );
}
