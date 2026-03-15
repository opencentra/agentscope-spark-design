import { Descriptions, DescriptionsProps } from '@agentscope-ai/design';

export default () => {
  const items: DescriptionsProps['items'] = [
    {
      key: '1',
      label: 'Name',
      children: 'Spark-Design',
    },
    {
      key: '2',
      label: 'Time',
      children: '2025-08-07',
    },
    {
      key: '3',
      label: 'Website',
      children: 'sparkdesign.agentscope.io',
    },
    {
      key: '4',
      label: 'Technology Stack',
      children: 'React',
    },
    {
      key: '5',
      label: 'Domain',
      children: 'LLM',
    },
    {
      key: '6',
      label: 'Company',
      children: 'Alibaba Cloud',
    },
  ];

  return <Descriptions items={items} layout="vertical" />;
};
