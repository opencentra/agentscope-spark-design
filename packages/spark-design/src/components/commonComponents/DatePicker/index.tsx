import { getCommonConfig } from '@/config';
import { SparkDateLine } from '@agentscope-ai/icons';
import { DatePicker as AntdDatePicker, ConfigProvider, theme } from 'antd';
import type { DatePickerProps, RangePickerProps } from 'antd/es/date-picker';
import classNames from 'classnames';
import React from 'react';
import { useStyle } from './index.style';

type CompoundedComponent = React.FC<DatePickerProps> & {
  RangePicker: React.FC<RangePickerProps>;
};

const DatePicker: CompoundedComponent = (props) => {
  const { className, popupClassName, ...restProps } = props;
  const { token } = theme.useToken();
  const commonConfig = getCommonConfig();
  const { sparkPrefix } = commonConfig;
  const Style = useStyle();

  return (
    <>
      <Style />
      <ConfigProvider
        theme={{
          components: {
            DatePicker: {
              activeBorderColor: token.colorPrimary,
              paddingInline: 8,
            },
          },
        }}
      >
        <AntdDatePicker
          suffixIcon={<SparkDateLine style={{ fontSize: '20px' }} />}
          className={classNames(`${sparkPrefix}-picker`, className)}
          popupClassName={classNames(
            `${sparkPrefix}-picker-dropdown`,
            popupClassName,
          )}
          {...restProps}
        />
      </ConfigProvider>
    </>
  );
};

const RangePicker: React.FC<RangePickerProps> = (props) => {
  const { className, popupClassName, ...restProps } = props;
  const { token } = theme.useToken();
  const commonConfig = getCommonConfig();
  const { sparkPrefix } = commonConfig;
  const Style = useStyle();

  return (
    <>
      <Style />
      <ConfigProvider
        theme={{
          components: {
            DatePicker: {
              activeBorderColor: token.colorPrimary,
              paddingInline: 8,
            },
          },
        }}
      >
        <AntdDatePicker.RangePicker
          suffixIcon={<SparkDateLine style={{ fontSize: '20px' }} />}
          className={classNames(`${sparkPrefix}-picker`, className)}
          popupClassName={classNames(
            `${sparkPrefix}-picker-dropdown`,
            popupClassName,
          )}
          popupStyle={{ padding: 0 }}
          {...restProps}
        />
      </ConfigProvider>
    </>
  );
};

DatePicker.RangePicker = RangePicker;

export default DatePicker;
