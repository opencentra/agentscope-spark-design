import { getCommonConfig } from '@agentscope-ai/design/config';
import {
  Descriptions as AntdDescriptions,
  DescriptionsProps,
  theme,
} from 'antd';
import classNames from 'classnames';
import { useStyle } from './index.style';

const Descriptions = (props: DescriptionsProps) => {
  const Style = useStyle();

  const { className, layout, colon = false, style, ...restProps } = props;

  const { antPrefix } = getCommonConfig();
  const { token } = theme.useToken();
  return (
    <>
      <Style />
      <AntdDescriptions
        className={classNames(
          className,
          layout === 'vertical' && `${antPrefix}-descriptions-vertical`,
        )}
        layout={layout}
        colon={colon}
        style={{
          [`--${antPrefix}-descriptions-vertical-label-padding-bottom` as string]: `${
            // @ts-ignore
            token.Descriptions.verticalLabelPaddingBottom ?? 4
          }px`,
          [`--${antPrefix}-descriptions-vertical-content-padding-bottom` as string]: `${
            // @ts-ignore
            token.Descriptions.verticalContentPaddingBottom ?? 24
          }px`,
          ...style,
        }}
        {...restProps}
      />
    </>
  );
};

export default Descriptions;
