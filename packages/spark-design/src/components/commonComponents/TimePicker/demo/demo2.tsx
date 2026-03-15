import { TimePicker } from '@agentscope-ai/design';
import { Flex } from 'antd';
import dayjs from 'dayjs';
import customParseFormat from 'dayjs/plugin/customParseFormat';

dayjs.extend(customParseFormat);
const { RangePicker } = TimePicker;

export default () => {
  const startTime = dayjs('17:12:30', 'HH:mm:ss');
  const endTime = dayjs('18:12:30', 'HH:mm:ss');
  return (
    <Flex vertical gap={16} style={{ width: 240 }}>
      <RangePicker />
      <RangePicker disabled allowEmpty />
      <RangePicker status="error" defaultValue={[startTime, endTime]} />
    </Flex>
  );
};
