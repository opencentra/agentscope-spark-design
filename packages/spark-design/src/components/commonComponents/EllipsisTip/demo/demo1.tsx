import { EllipsisTip } from '@agentscope-ai/design';
import { Space } from 'antd';
import React from 'react';

const App: React.FC = () => {
  const tags = [
    '短标签',
    '超长标签内容超长标签内容超长标签内容超长标签内容超长标签内容超长标签内容超长标签内容超长标签内容',
  ];

  return (
    <>
      <Space style={{ lineHeight: '24px' }}>
        {tags.map((tag) => (
          <EllipsisTip
            key={tag}
            style={{
              maxWidth: 200,
            }}
            tooltip={tag}
          >
            {tag}
          </EllipsisTip>
        ))}
      </Space>
    </>
  );
};

export default App;
