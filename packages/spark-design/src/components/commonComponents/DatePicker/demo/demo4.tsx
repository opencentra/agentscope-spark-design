import { DatePicker } from '@agentscope-ai/design';
import { Flex } from 'antd';
import type { Dayjs } from 'dayjs';
import dayjs from 'dayjs';
import customParseFormat from 'dayjs/plugin/customParseFormat';

dayjs.extend(customParseFormat);
const onChange = (date, dateString) => {
  console.log(date, dateString);
};

const defaultValue: Dayjs[] = [
  dayjs('2025-07-03'),
  dayjs('2025-07-04'),
  dayjs('2025-07-05'),
];

export default () => {
  return (
    <Flex vertical gap={16} style={{ width: 320 }}>
      <DatePicker
        multiple
        onChange={onChange}
        maxTagCount="responsive"
        defaultValue={defaultValue as any}
      />
      <DatePicker
        multiple
        onChange={onChange}
        maxTagCount="responsive"
        disabled
        defaultValue={defaultValue as any}
      />
      <DatePicker
        multiple
        status="error"
        onChange={onChange}
        maxTagCount="responsive"
        defaultValue={defaultValue as any}
      />
    </Flex>
  );
};
