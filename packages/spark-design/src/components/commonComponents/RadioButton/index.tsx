import { getCommonConfig } from '@/config';
import { Radio, RadioGroupProps } from 'antd';
import cls from 'classnames';
import { useStyle } from './index.style';

export interface SparkRadioButtonProps extends RadioGroupProps {
  /**
   * @description 边框
   * @descriptionEn border
   * @default false
   */
  bordered?: boolean;
  /**
   * @description 按钮背景色类型
   * @descriptionEn ghost
   * @default true
   */
  ghost?: boolean;
  /**
   * @description 间距
   * @descriptionEn gap
   * @default 12 px
   */
  gap?: number;
}

export default (props: SparkRadioButtonProps) => {
  const commonConfig = getCommonConfig();
  const { sparkPrefix, antPrefix } = commonConfig;
  const { ghost = true } = props;
  const Style = useStyle();

  return (
    <>
      <Style />
      <Radio.Group
        {...props}
        className={cls(
          props.className,
          props.bordered ? `${sparkPrefix}-radio-group-bordered` : '',
          ghost ? `${antPrefix}-radio-group-ghost` : '',
        )}
        optionType="button"
      />
    </>
  );
};
