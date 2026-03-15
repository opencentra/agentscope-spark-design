import { Input } from '@agentscope-ai/design';
import { useState } from 'react';

export default () => {
  const { Search } = Input;
  const [keywords, setKeywords] = useState('');

  function handleSearch(value) {
    console.log('value: ', value);
  }

  return (
    <Search
      placeholder="请输入内容搜索"
      allowClear
      value={keywords}
      onChange={(e) => setKeywords(e.target.value)}
      onSearch={handleSearch}
    />
  );
};
