import { Select } from '@agentscope-ai/design';
import { Flex } from 'antd';

const handleChange = (value: string) => {
  console.log(`selected ${value}`);
};

const handleChange2 = (value: string) => {
  console.log(`selected ${value}`);
};
const handleChange3 = (value: string) => {
  console.log(`selected ${value}`);
};

const App: React.FC = () => (
  <Flex vertical gap="middle" align="center" justify="center">
    <Select
      mode="multiple"
      placeholder="Select here..."
      style={{ width: 367 }}
      onChange={handleChange}
      options={[
        { value: '1', label: 'Menu Item 1' },
        { value: '2', label: 'Menu Item 2' },
        { value: '3', label: 'Menu Item 3' },
      ]}
    />

    <Select
      mode="multiple"
      placeholder="Select here..."
      style={{ width: 367 }}
      onChange={handleChange2}
      value={['1', '2'] as any}
      disabled
      options={[
        { value: '1', label: 'Tag 1' },
        { value: '2', label: 'Tag 2' },
        { value: '3', label: 'Tag 3' },
      ]}
    />

    <Select
      status="error"
      mode="multiple"
      placeholder="Select here..."
      style={{ width: 367 }}
      onChange={handleChange3}
      options={[
        { value: '1', label: 'Tag 1' },
        { value: '2', label: 'Tag 2' },
        { value: '3', label: 'Tag 3' },
      ]}
    />
  </Flex>
);

export default App;
