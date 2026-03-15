import { DatePicker } from '@agentscope-ai/design';
import { Flex } from 'antd';
import dayjs from 'dayjs';
import customParseFormat from 'dayjs/plugin/customParseFormat';

dayjs.extend(customParseFormat);
const onChange = (date, dateString) => {
  console.log(date, dateString);
};

export default () => {
  return (
    <Flex vertical gap={16} style={{ width: 240 }}>
      <DatePicker onChange={onChange} />
      <DatePicker onChange={onChange} picker="week" />
      <DatePicker onChange={onChange} picker="month" />
      <DatePicker onChange={onChange} picker="quarter" />
      <DatePicker onChange={onChange} picker="year" />
    </Flex>
  );
};
