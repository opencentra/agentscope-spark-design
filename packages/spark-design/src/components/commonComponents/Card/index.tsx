import { getCommonConfig } from '@/config';
import { ReactNode } from 'react';

import { Card, CardProps } from 'antd';
import classNames from 'classnames';
import { useStyle } from './index.style';

export interface SparkCardProps extends CardProps {
  /**
   * @description 副标题
   * @descriptionEn subtitle
   */
  info?: ReactNode;
}

export default (props: SparkCardProps) => {
  const { title, info, children, className, ...restProps } = props;
  const Style = useStyle();
  const commonConfig = getCommonConfig();
  const { sparkPrefix } = commonConfig;

  return (
    <>
      <Style />
      <Card
        className={classNames(`${sparkPrefix}-card`, className)}
        {...restProps}
        title={null}
      >
        <div className={`${sparkPrefix}-card-wrapper`}>
          {title && <div className={`${sparkPrefix}-title`}>{title}</div>}
          {info && <div className={`${sparkPrefix}-info`}>{info}</div>}
          {children && (
            <div className={`${sparkPrefix}-content`}>{children}</div>
          )}
        </div>
      </Card>
    </>
  );
};
