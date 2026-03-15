import { Input } from '@agentscope-ai/design';

export default () => {
  const { Search } = Input;

  function handleSearch(value) {
    console.log('value: ', value);
  }

  return <Search placeholder="请输入内容" allowClear onSearch={handleSearch} />;
};
