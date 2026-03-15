import { TimePicker } from '@agentscope-ai/design';
import { Flex } from 'antd';
import dayjs from 'dayjs';
import customParseFormat from 'dayjs/plugin/customParseFormat';

dayjs.extend(customParseFormat);

const onChange = (time, timeString) => {
  console.log(time, timeString);
};

export default () => {
  return (
    <Flex vertical gap={16} style={{ width: 240 }}>
      <TimePicker onChange={onChange} />
      <TimePicker disabled />
      <TimePicker status="error" defaultValue={dayjs('17:12:30', 'HH:mm:ss')} />
    </Flex>
  );
};
