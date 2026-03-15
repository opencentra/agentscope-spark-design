import { IconFont } from '@agentscope-ai/design';
import { Table } from 'antd';

const dataSource = [
  {
    key: 'small',
    size: 'small',
  },
  {
    key: 'middle',
    size: 'middle',
  },
  {
    key: 'large',
    size: 'large',
  },
  {
    key: '24px',
    size: '24px',
  },
  {
    key: '自定义数值',
    size: 32, // 你可以传入任意数字或字符串，如'32px'
  },
];

const columns = [
  {
    title: 'size 取值',
    dataIndex: 'size',
    key: 'size',
    render: (text) => (typeof text === 'number' ? text : text),
  },
  {
    title: '渲染效果',
    dataIndex: 'size',
    key: 'icon',
    render: (size) => <IconFont type="spark-userGroup-fill" size={size} />,
  },
];

export default () => (
  <>
    size支持传入固定和自由尺寸
    <Table
      dataSource={dataSource}
      columns={columns}
      pagination={false}
      rowKey="key"
    />
  </>
);
