import { Collapse, CollapseProps } from '@agentscope-ai/design';

export default () => {
  const items: CollapseProps['items'] = [
    {
      key: 0,
      label: 'This is a Panel',
      children: 'This is a long text used to describe a concept',
    },
    {
      key: 1,
      label: 'This is a Panel',
      children: 'This is a long text used to describe a concept',
    },
    {
      key: 2,
      label: 'This is a Panel',
      children: 'This is a long text used to describe a concept',
    },
  ];

  return (
    <Collapse items={items} defaultActiveKey={[0]} style={{ width: 480 }} />
  );
};
