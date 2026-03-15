import { getCommonConfig, message, Upload } from '@agentscope-ai/design';
import { SparkUploadLine } from '@agentscope-ai/icons';

const { Dragger } = Upload;
const commonConfig = getCommonConfig();
const { antPrefix } = commonConfig;

const props = {
  name: 'file',
  multiple: true,
  action: 'https://660d2bd96ddfa2943b33731c.mockapi.io/api/upload',
  onChange(info) {
    const { status } = info.file;
    if (status !== 'uploading') {
      console.log(info.file, info.fileList);
    }
    if (status === 'done') {
      message.success(`${info.file.name} file uploaded successfully.`);
    } else if (status === 'error') {
      message.error(`${info.file.name} file upload failed.`);
    }
  },
  onDrop(e) {
    console.log('Dropped files', e.dataTransfer.files);
  },
};

export default () => {
  return (
    <Dragger {...props}>
      <div className={`${antPrefix}-upload-icon`}>
        <SparkUploadLine style={{ fontSize: '24px' }} />
      </div>
      <p className={`${antPrefix}-upload-text`}>
        Click or drag file to this area
      </p>
      <p className={`${antPrefix}-upload-hint`}>
        I am a description of upload things
      </p>
    </Dragger>
  );
};
