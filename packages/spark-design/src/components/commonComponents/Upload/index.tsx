import { getCommonConfig } from '@/config';
import { Upload as AntdUpload, DraggerProps, UploadProps } from 'antd';
import classNames from 'classnames';
import { useStyle } from './index.style';

type CompoundedComponent = React.FC<UploadProps> & {
  Dragger: React.FC<DraggerProps>;
  LIST_IGNORE: string;
};

const Upload: CompoundedComponent = (props) => {
  const { className, ...restProps } = props;
  const commonConfig = getCommonConfig();
  const { sparkPrefix } = commonConfig;
  const Style = useStyle();

  return (
    <>
      <Style />
      <AntdUpload
        className={classNames(`${sparkPrefix}-upload`, className)}
        {...restProps}
      />
    </>
  );
};

const Dragger: React.FC<DraggerProps> = (props) => {
  const { className, ...restProps } = props;
  const commonConfig = getCommonConfig();
  const { sparkPrefix } = commonConfig;
  const Style = useStyle();

  return (
    <>
      <Style />
      <AntdUpload.Dragger
        className={classNames(`${sparkPrefix}-upload`, className)}
        {...restProps}
      ></AntdUpload.Dragger>
    </>
  );
};

Upload.Dragger = Dragger;
Upload.LIST_IGNORE = AntdUpload.LIST_IGNORE;

export default Upload;
