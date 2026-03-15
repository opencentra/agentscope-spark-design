import { getCommonConfig } from '@agentscope-ai/design';
import { Input, InputProps, InputRef } from 'antd';
import { TextAreaProps, TextAreaRef } from 'antd/es/input/TextArea';
import classNames from 'classnames';
import React from 'react';
import { useStyle } from './index.style';

export interface SparkInputProps extends InputProps {
  /**
   * @description 形态
   * @descriptionEn Shape
   * @default default 默认
   */
  shape?: 'default' | 'round';
}

type CompoundedComponent = React.ForwardRefExoticComponent<
  SparkInputProps & React.RefAttributes<InputRef>
> & {
  TextArea: typeof Input.TextArea;
  Search: typeof Input.Search;
  Password: typeof Input.Password;
  OTP: typeof Input.OTP;
};

const SparkInput = React.forwardRef<InputRef, SparkInputProps>((props, ref) => {
  const { shape = 'default', ...restProps } = props;
  const { antPrefix } = getCommonConfig();
  const Style = useStyle();

  return (
    <>
      <Style />
      <Input
        {...restProps}
        className={classNames(props.className, {
          [`${antPrefix}-input-round`]: shape === 'round',
        })}
        ref={ref}
      />
    </>
  );
});

const SparkTextArea = React.forwardRef<TextAreaRef, TextAreaProps>(
  (props, ref) => {
    const { antPrefix } = getCommonConfig();
    const Style = useStyle();

    return (
      <>
        <Style />
        <Input.TextArea
          {...props}
          className={classNames(`${antPrefix}-text-area`, props.className)}
          ref={ref}
        />
      </>
    );
  },
);

Object.assign(SparkInput, {
  TextArea: SparkTextArea,
  Search: Input.Search,
  Password: Input.Password,
  OTP: Input.OTP,
});

export default SparkInput as CompoundedComponent;
