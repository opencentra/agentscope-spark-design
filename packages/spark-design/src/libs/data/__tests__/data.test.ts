import { expect, test } from 'vitest';
import { clearData, getDataProp, JsonParse } from '..';

const data = {
  name: '张三',
};

test('data getDataProp', async () => {
  expect(getDataProp(data, 'name')).toEqual('张三');
});

test('data JsonParse', async () => {
  const str = '{"name":"张三"}';
  expect(JsonParse(str)).toEqual(data);
});

test('data clearData', async () => {
  const originData = {
    name: '张三',
    class: 'BaseData',
  };
  expect(clearData(originData)).toEqual(data);
});
