import { Card } from '@agentscope-ai/design';
import { theme } from 'antd';

export default () => {
  const { token } = theme.useToken();
  return (
    <Card title="Card title" info="info here" style={{ width: 240 }}>
      <div
        style={{
          width: '100%',
          height: 117,
          fontSize: 16,
          color: token.colorTextSecondary,
          background: token.colorFillTertiary,
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        Content
      </div>
    </Card>
  );
};
