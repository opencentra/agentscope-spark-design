import { Spinner } from '@agentscope-ai/design';
import { theme } from 'antd';

const App: React.FC = () => {
  const { token } = theme.useToken();
  return (
    <div
      style={{
        width: '100%',
        height: '100%',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        background: token.colorBgBase,
      }}
    >
      <Spinner tip={<span>No progress</span>} />
    </div>
  );
};

export default App;
