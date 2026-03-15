import { FloatButton } from '@agentscope-ai/design';
import { SparkProblemLine } from '@agentscope-ai/icons';
import React from 'react';

const App: React.FC = () => (
  <FloatButton
    icon={<SparkProblemLine />}
    type="primary"
    style={{ insetInlineEnd: '50%', transform: 'translateX(50%)' }}
  />
);

export default App;
