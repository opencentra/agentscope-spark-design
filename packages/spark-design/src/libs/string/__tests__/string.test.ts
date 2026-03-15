import { expect, test } from 'vitest';
import { base64Decoder, base64Encoder, parseJsonSafely } from '..';

const data = {
  name: '张三',
};
const str = '{"name":"张三"}';
const encodedStr = 'eyJuYW1lIjoi5byg5LiJIn0=';

test('string parseJsonSafely', async () => {
  const str = '{"name":"张三"}';
  expect(parseJsonSafely(str)).toEqual(data);
});

test('string base64Encoder', async () => {
  expect(base64Encoder(str)).toEqual(encodedStr);
});

test('string base64Decoder', async () => {
  expect(base64Decoder(encodedStr)).toEqual(str);
});
