import { getCommonConfig } from '@/config';
import { SparkTimestampLine } from '@agentscope-ai/icons';
import {
  TimePicker as AntdTimePicker,
  ConfigProvider,
  theme,
  TimePickerProps,
  TimeRangePickerProps,
} from 'antd';
import classNames from 'classnames';
import React from 'react';
import { useStyle } from './index.style';

type CompoundedComponent = React.FC<TimePickerProps> & {
  RangePicker: React.FC<TimeRangePickerProps>;
};

const TimePicker: CompoundedComponent = (props) => {
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
            },
          },
        }}
      >
        <AntdTimePicker
          suffixIcon={<SparkTimestampLine />}
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

const RangePicker: React.FC<TimeRangePickerProps> = (props) => {
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
            },
          },
        }}
      >
        <AntdTimePicker.RangePicker
          suffixIcon={<SparkTimestampLine />}
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

TimePicker.RangePicker = RangePicker;

export default TimePicker;
