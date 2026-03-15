import { getCommonConfig, Switch, Table, Tag } from '@agentscope-ai/design';
import { SparkCheckCircleFill } from '@agentscope-ai/icons';
import type { TableProps } from 'antd';
import { Flex, Space } from 'antd';
import React, { useState } from 'react';

interface DataType {
  key: string;
  title: string;
  content: string;
  switch: string;
  status: string;
  tags: string[];
}

const App: React.FC = () => {
  const [checkedList, setCheckedList] = useState<string[]>([]);
  const commonConfig = getCommonConfig();
  const { antPrefix } = commonConfig;
  const columns: TableProps<DataType>['columns'] = [
    {
      title: 'Key',
      dataIndex: 'key',
      key: 'key',
      sorter: (a, b) => Number(a.key) - Number(b.key),
      sortDirections: ['descend'],
    },
    {
      title: 'Title',
      dataIndex: 'title',
      key: 'title',
    },
    {
      title: 'Content',
      dataIndex: 'content',
      key: 'content',
    },
    {
      title: 'Switch',
      dataIndex: 'switch',
      key: 'switch',
      render: (_, { key }) => (
        <Switch
          size="small"
          checked={!checkedList[key]}
          onChange={() => {
            const newCheckedList = [...checkedList];
            newCheckedList[key] = !newCheckedList[key];
            setCheckedList(newCheckedList);
          }}
          label={checkedList[key] ? 'Closed' : 'Opening'}
        />
      ),
    },
    {
      title: 'Status',
      dataIndex: 'status',
      key: 'status',
      render: (_, { status }) => (
        <Flex align="center" gap={4}>
          <SparkCheckCircleFill
            style={{
              color: `var(--${antPrefix}-color-success)`,
              fontSize: 18,
            }}
          />
          <span>{status}</span>
        </Flex>
      ),
    },
    {
      title: 'Tags',
      key: 'tags',
      dataIndex: 'tags',
      render: (_, { tags }) => (
        <>
          {tags.map((tag) => {
            return (
              <Tag color="purple" key={tag} bordered={false}>
                {tag.toUpperCase()}
              </Tag>
            );
          })}
        </>
      ),
    },
    {
      title: 'Operate',
      key: 'operate',
      render: (_) => (
        <Space size="middle">
          <a>Operate</a>
        </Space>
      ),
    },
  ];

  const data: DataType[] = [
    {
      key: '1',
      title: 'First Column Row 1',
      content: 'Content Row 1',
      switch: 'Switch Row 1',
      status: 'Status Row 1',
      tags: ['Tag1'],
    },
    {
      key: '2',
      title: 'First Column Row 2',
      content: 'Content Row 2',
      switch: 'Switch Row 2',
      status: 'Status Row 2',
      tags: ['Tag2'],
    },
    {
      key: '3',
      title: 'First Column Row 3',
      content: 'Content Row 3',
      switch: 'Switch Row 3',
      status: 'Status Row 3',
      tags: ['Tag3'],
    },
  ];

  return <Table columns={columns} dataSource={data} pagination={false} />;
};

export default App;
