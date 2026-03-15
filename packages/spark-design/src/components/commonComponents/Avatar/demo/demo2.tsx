import { Avatar } from '@agentscope-ai/design';
import { Space, theme } from 'antd';

export default () => {
  const { token } = theme.useToken();

  return (
    <Space>
      <Avatar
        style={{
          // @ts-ignore
          backgroundColor: token.colorPurpleBg,
          // @ts-ignore
          color: token.colorPurple,
        }}
      >
        Micheal Jack
      </Avatar>
      <Avatar
        style={{
          // @ts-ignore
          backgroundColor: token.colorPurpleBg,
          // @ts-ignore
          color: token.colorPurple,
        }}
      >
        张三
      </Avatar>
    </Space>
  );
};
