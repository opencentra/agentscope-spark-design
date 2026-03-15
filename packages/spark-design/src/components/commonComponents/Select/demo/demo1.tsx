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
      placeholder="Select here..."
      style={{ width: 240 }}
      onChange={handleChange}
      options={[
        { value: '1', label: 'Menu Item 1' },
        { value: '2', label: 'Menu Item 2' },
        { value: '3', label: 'Menu Item 3' },
      ]}
    />

    <Select
      placeholder="Select here..."
      style={{ width: 240 }}
      disabled
      onChange={handleChange2}
      value={'1'}
      options={[
        { value: '1', label: 'Selected item' },
        { value: '2', label: 'Menu Item 2' },
        { value: '3', label: 'Menu Item 3' },
      ]}
    />

    <Select
      status="error"
      placeholder="Select here..."
      style={{ width: 240 }}
      onChange={handleChange3}
      options={[
        { value: '1', label: 'Error Menu Item 1' },
        { value: '2', label: 'Error Menu Item 2' },
        { value: '3', label: 'Error Menu Item 3' },
      ]}
    />
  </Flex>
);

export default App;
