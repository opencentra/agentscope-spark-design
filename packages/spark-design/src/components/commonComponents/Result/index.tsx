import Empty, { SparkEmptyProps } from '../Empty';

export interface SparkResultProps extends Omit<SparkEmptyProps, 'texture'> {
  /**
   * @description 是否显示纹理
   * @default false
   */
  texture?: boolean;
}
export default (props: SparkResultProps) => {
  const {
    texture = false,
    ...restProps
  } = props;
  
  return <Empty {...restProps} texture={texture} />
};
