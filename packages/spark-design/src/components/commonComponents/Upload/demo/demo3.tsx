import { FileIcon, Upload, getCommonConfig } from '@agentscope-ai/design';
import { SparkDeleteLine, SparkFalseLine } from '@agentscope-ai/icons';
import type { UploadFile } from 'antd/es/upload/interface';

const { sparkPrefix } = getCommonConfig();

const fileTypeMap: Record<string, string[]> = {
  epub: ['.epub'],
  excel: ['.xls', '.xlsx', '.xlsm', '.xlsb'],
  html: ['.html', '.htm'],
  image: ['.jpg', '.jpeg', '.png', '.gif', '.bmp', '.webp', '.svg'],
  md: ['.md', '.markdown'],
  mobi: ['.mobi'],
  pdf: ['.pdf'],
  ppt: ['.ppt', '.pptx', '.pps', '.ppsx'],
  txt: ['.txt'],
  web: ['.web'],
  word: ['.doc', '.docx'],
};

const getFileType = (fileName: string): string => {
  const fileTypeEntries = Object.entries(fileTypeMap);
  for (const [type, extensions] of fileTypeEntries) {
    if (extensions.some((ext) => fileName.endsWith(ext))) {
      return type;
    }
  }

  return 'common';
};

const fileList: UploadFile[] = [
  {
    uid: '0',
    name: '1.pdf',
    status: 'done' as const,
    response: 'good',
  },
  {
    uid: '-1',
    name: '2.pdf',
    status: 'uploading' as const,
    percent: 60,
  },
  {
    uid: '-2',
    name: '3.pdf',
    status: 'error' as const,
    response: 'Server Error 500',
  },
];

const props = {
  showUploadList: {
    showRemoveIcon: (file: UploadFile) => {
      return file.status !== 'removed';
    },
    removeIcon: (file: UploadFile) => {
      return file.status === 'uploading' ? (
        <SparkFalseLine style={{ fontSize: '20px' }} />
      ) : (
        <SparkDeleteLine style={{ fontSize: '20px' }} />
      );
    },
  },
  iconRender: (file: UploadFile) => {
    const isError = file.status === 'error' || file.status === 'removed';
    const fileType = getFileType(file.name || '');
    let style = {};
    if (isError) {
      style = {
        filter: 'grayscale(1)',
        opacity: 0.4,
      };
    }

    return <FileIcon type={fileType} style={style} />;
  },
  progress: { size: { width: 134, height: 4 }, showInfo: false },
};

export default () => (
  <Upload
    className={`${sparkPrefix}-custom-uploaded`}
    action="https://660d2bd96ddfa2943b33731c.mockapi.io/api/upload"
    listType="picture"
    defaultFileList={fileList}
    {...props}
  />
);
