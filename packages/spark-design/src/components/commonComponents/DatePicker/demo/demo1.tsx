import { DatePicker } from '@agentscope-ai/design';
import { Flex } from 'antd';
import dayjs from 'dayjs';
import customParseFormat from 'dayjs/plugin/customParseFormat';

dayjs.extend(customParseFormat);

const onChange = (date, dateString) => {
  console.log(date, dateString);
};

const dateFormat = 'YYYY-MM-DD';

export default () => {
  return (
    <Flex vertical gap={16} style={{ width: 240 }}>
      <DatePicker onChange={onChange} />
      <DatePicker disabled />
      <DatePicker
        status="error"
        defaultValue={dayjs('2025-07-03', dateFormat)}
      />
    </Flex>
  );
};
