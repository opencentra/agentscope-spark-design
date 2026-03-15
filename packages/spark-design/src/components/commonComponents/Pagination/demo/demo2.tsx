import { Pagination } from '@agentscope-ai/design';
import { Flex } from 'antd';
import React from 'react';

const App: React.FC = () => {
  return (
    <Flex align="center" vertical justify="center" gap={50}>
      <Pagination 
      total={100} 
      showTotal={(total) => `Total ${total} items`}
      defaultPageSize={10}
      defaultCurrent={2}
      />
    </Flex>
  );
};

export default App;
