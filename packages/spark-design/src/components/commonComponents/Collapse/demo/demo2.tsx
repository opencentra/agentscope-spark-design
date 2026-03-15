import { Collapse, CollapseProps } from '@agentscope-ai/design';
import { SparkSettingLine } from '@agentscope-ai/icons';

export default () => {
  const renderExtra = () => {
    return (
      <div
        style={{
          width: 32,
          height: 32,
          fontSize: 20,
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          cursor: 'pointer',
        }}
        onClick={(event) => {
          event.stopPropagation();
        }}
      >
        <SparkSettingLine />
      </div>
    );
  };

  const items: CollapseProps['items'] = [
    {
      key: 0,
      label: 'This is a Panel',
      children: 'This is a long text used to describe a concept',
      extra: renderExtra(),
    },
    {
      key: 1,
      label: 'This is a Panel',
      children: 'This is a long text used to describe a concept',
      extra: renderExtra(),
    },
    {
      key: 2,
      label: 'This is a Panel',
      children: 'This is a long text used to describe a concept',
      extra: renderExtra(),
    },
  ];

  return (
    <Collapse items={items} defaultActiveKey={[0]} style={{ width: 480 }} />
  );
};
