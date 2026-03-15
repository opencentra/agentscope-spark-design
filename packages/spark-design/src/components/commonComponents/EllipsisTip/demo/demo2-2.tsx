import { EllipsisTip } from '@agentscope-ai/design';
import React from 'react';

const App: React.FC = () => {
  const tags = [
    '短标签',
    '超长标签内容超长标签内容超长标签内容超长标签内容超长标签内容超长标签内容超长标签内容超长标签内容超长标签内容超长标签内容超长标签内容超长标签内容超长标签内容超长标签内容超长标签内容超长标签内容超长标签内容超长标签内容超长标签内容超长标签内容超长标签内容超长标签内容超长标签内容超长标签内容超长标签内容超长标签内容超长标签内容超长标签内容超长标签内容超长标签内容超长标签内容超长标签内容',
  ];

  return (
    <>
      {tags.map((tag) => (
        <EllipsisTip key={tag} rows={2} tooltip={tag}>
          {tag}
        </EllipsisTip>
      ))}
    </>
  );
};

export default App;
