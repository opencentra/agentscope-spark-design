import { DatePicker } from '@agentscope-ai/design';
import { Flex } from 'antd';
import dayjs from 'dayjs';
import customParseFormat from 'dayjs/plugin/customParseFormat';

const { RangePicker } = DatePicker;

dayjs.extend(customParseFormat);
const onChange = (date, dateString) => {
  console.log(date, dateString);
};

export default () => {
  return (
    <Flex vertical gap={16} style={{ width: 320 }}>
      <RangePicker onChange={onChange} />
      <RangePicker
        onChange={onChange}
        showTime
        placeholder={['Start Time', 'End Time']}
      />
      <RangePicker onChange={onChange} picker="week" />
      <RangePicker onChange={onChange} picker="month" />
      <RangePicker onChange={onChange} picker="quarter" />
      <RangePicker
        onChange={onChange}
        picker="year"
        id={{
          start: 'startInput',
          end: 'endInput',
        }}
        onFocus={(_, info) => {
          console.log('Focus:', info.range);
        }}
        onBlur={(_, info) => {
          console.log('Blur:', info.range);
        }}
      />
    </Flex>
  );
};
