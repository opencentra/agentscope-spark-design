import { expect, test, vi } from 'vitest';
import delay from '..';

test('delay test', async () => {
  vi.spyOn(window, 'setTimeout');
  await delay();
  expect(window.setTimeout).toHaveBeenCalled();
});
