import { expect, test } from 'vitest';
import { getLang, isCN } from '..';

test('getLang', () => {
  expect(getLang()).toBe('zh-CN');
});

test('isCN', () => {
  expect(isCN()).toBe(true);
});
