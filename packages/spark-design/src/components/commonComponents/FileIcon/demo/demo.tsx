import { Button, FileCard, FileIcon } from '@agentscope-ai/design';
import { Space } from 'antd';

export default function () {
  const list = [
    'common',
    'epub',
    'excel',
    'html',
    'image',
    'md',
    'mobi',
    'pdf',
    'ppt',
    'txt',
    'web',
    'word',
  ];

  return (
    <div>
      <Space>
        {list.map((t) => (
          <FileIcon key={t} type={t} />
        ))}
      </Space>
      <div />
      <Space wrap>
        {list.map((t) => (
          <FileCard key={t} name={t} size={1000} type={t} />
        ))}
      </Space>

      <div />

      <FileCard name={'pdf'} size={1000} type={'pdf'} width="100%">
        <Button size="small">删除</Button>
      </FileCard>

      <FileCard name={'pdf'} type={'pdf'} width="100%">
        <Button size="small">删除</Button>
      </FileCard>
    </div>
  );
}
