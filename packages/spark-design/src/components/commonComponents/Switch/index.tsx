import { Flex, Switch } from 'antd';
import { SwitchProps } from 'antd/lib';
import { ReactNode } from 'react';
import { getCommonConfig } from '../../../config';
import { useStyle } from './index.style';

export interface SparkSwitchProps extends SwitchProps {
  /**
   * @description Switch后的内容
   * @descriptionEn content after the switch
   */
  label?: ReactNode;
}
export default (props: SparkSwitchProps) => {
  const Style = useStyle();
  const { label, className, ...restProps } = props;
  const { sparkPrefix } = getCommonConfig();
  return (
    <>
      <Style />
      <Flex align="center" gap={8} className={className}>
        <Switch
          {...restProps}
          className={`${sparkPrefix}-switch`}
        />
        {
          label && <span className={`${sparkPrefix}-switch-label`}>{label}</span>
        }
      </Flex>
    </>
  );
};
