import { Button } from '@agentscope-ai/design';
import { SparkPlusLine } from '@agentscope-ai/icons';
import { Flex } from 'antd';

export default () => {
  return (
    <Flex gap={24}>
      <div>
        {/* 推荐方式，传入icon */}
        <div style={{ marginBottom: 16 }}>
          <Button icon={<SparkPlusLine></SparkPlusLine>} type="primary">
            Button MD
          </Button>
        </div>
        <div style={{ marginBottom: 16 }}>
          <Button icon={<SparkPlusLine></SparkPlusLine>}>Button MD</Button>
        </div>
        <div style={{ marginBottom: 16 }}>
          <Button icon={<SparkPlusLine></SparkPlusLine>} type="text">
            Text
          </Button>
        </div>
        <div style={{ marginBottom: 16 }}>
          <Button icon={<SparkPlusLine></SparkPlusLine>} type="textCompact">
            TextCompact
          </Button>
        </div>
      </div>
      <div>
        {/* 便捷方式，传入iconfont */}
        <div style={{ marginBottom: 16, height: '32px', padding: '4px 0' }}>
          <Button type="primary" size="small" iconType="spark-plus-line">
            Button SM
          </Button>
        </div>
        <div style={{ marginBottom: 16, height: '32px', padding: '4px 0' }}>
          <Button size="small" iconType="spark-plus-line">
            Button SM
          </Button>
        </div>
        <div style={{ marginBottom: 16, height: '32px', padding: '4px 0' }}>
          <Button size="small" iconType="spark-plus-line" type="text">
            Text
          </Button>
        </div>
        <div style={{ marginBottom: 16, height: '32px', padding: '4px 0' }}>
          <Button size="small" iconType="spark-plus-line" type="textCompact">
            TextCompact
          </Button>
        </div>
      </div>
    </Flex>
  );
};
