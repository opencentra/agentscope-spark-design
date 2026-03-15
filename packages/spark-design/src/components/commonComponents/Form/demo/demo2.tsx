import { Form, Input, Radio, Switch } from '@agentscope-ai/design';

export default () => {
  const [form] = Form.useForm();
  const open = Form.useWatch('switch', form);
  return (
    <Form layout="horizontal" form={form} labelCol={{ flex: '100px' }}>
      <Form.Item
        label="Your title"
        name="input"
        tooltip="One World, one dream."
      >
        <Input placeholder="Type here..." />
      </Form.Item>
      <Form.Item label="Radio" name="radio" required>
        <Radio.Group>
          <Radio value="1">Option 1</Radio>
          <Radio value="2">Option 2</Radio>
          <Radio value="3">Option 3</Radio>
        </Radio.Group>
      </Form.Item>
      <Form.Item label="Switch" name="switch" required>
        <Switch label={open ? 'Opening' : 'Closed'} />
      </Form.Item>
    </Form>
  );
};
