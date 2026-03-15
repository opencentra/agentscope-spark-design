import { SliderSelector } from '@agentscope-ai/design';
import { useState } from 'react';

export default () => {
  const [value, setValue] = useState<number | null>(null);
  return (
    <>
      <SliderSelector
        min={1}
        max={20}
        step={1}
        precision={0}
        onChange={(val) => {
          setValue(val);
        }}
        value={value}
      />
      <br></br>
      允许指定InputNumber的宽度
      <SliderSelector
        min={1}
        max={20}
        step={1}
        precision={0}
        onChange={(val) => {
          setValue(val);
        }}
        value={value}
        inputNumberWrapperStyle={{
          width: '300px',
        }}
      />
    </>
  );
};
