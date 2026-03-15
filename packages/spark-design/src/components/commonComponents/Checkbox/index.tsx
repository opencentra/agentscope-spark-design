import { Checkbox as AntCheckbox, CheckboxProps } from 'antd';
import { CheckboxGroupProps } from 'antd/es/checkbox';
import React from 'react';
import { getCommonConfig } from '../../../config';
import { useStyle } from './index.style';

export interface SparkCheckboxProps extends CheckboxProps {
  /**
   * @description 描述文本
   * @descriptionEn Description Text
   * @default
   */
  description?: string;
  /**
   * @description 描述文本的样式类名
   * @descriptionEn Description Text Style Class Name
   * @default
   */
  descriptionClassName?: string;
  /**
   * @description 描述文本的内联样式
   * @descriptionEn Description Text Inline Style
   * @default
   */
  descriptionStyle?: React.CSSProperties;
}

type CompoundedComponent = React.FC<SparkCheckboxProps> & {
  Group: React.FC<CheckboxGroupProps>;
};

const Checkbox: CompoundedComponent = ({
  description,
  descriptionClassName,
  descriptionStyle,
  children,
  ...restProps
}) => {
  const { antPrefix, sparkPrefix } = getCommonConfig();

  const Style = useStyle();

  const defaultDescriptionStyle: React.CSSProperties = {
    marginLeft: '24px',
    marginTop: '6px',
    fontSize: '12px',
    color: `var(--${antPrefix}-color-text-tertiary)`,
  };

  return (
    <>
      <Style />
      <div className={`${sparkPrefix}-checkbox`}>
        <AntCheckbox {...restProps}>{children}</AntCheckbox>
        {description && (
          <div
            className={descriptionClassName}
            style={{
              ...defaultDescriptionStyle,
              ...descriptionStyle,
            }}
          >
            {description}
          </div>
        )}
      </div>
    </>
  );
};

Checkbox.Group = AntCheckbox.Group;

export default Checkbox;
