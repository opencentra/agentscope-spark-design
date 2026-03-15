import { getCommonConfig } from '@/config';
import { findClosestBySelector } from '@/libs/dom';
import { Popover, PopoverProps } from 'antd';
import React from 'react';

const SparkPopover = React.forwardRef<any, PopoverProps>((props, ref) => {
  const isContentEmpty =
    props.content === '' ||
    props.content === undefined ||
    props.content === null;
  const isTitleEmpty =
    props.title === '' || props.title === undefined || props.title === null;
  const open =
    props.open !== undefined && props.open !== null
      ? props.open
      : isContentEmpty && isTitleEmpty
      ? false
      : undefined;
  const { antPrefix } = getCommonConfig();

  return (
    <Popover
      {...props}
      arrow={props.arrow || false}
      open={open}
      ref={ref}
      getPopupContainer={
        props.getPopupContainer ||
        ((triggerNode) => {
          return findClosestBySelector(triggerNode, `.${antPrefix}-app`); // 默认放到App组件下，获取自定义css变量
        })
      }
    />
  );
});

export default SparkPopover;
