import { cleanup } from '@testing-library/react';
import { afterEach, expect, test } from 'vitest';
import staticRenderer from '../index';
afterEach(cleanup);

test('staticRenderer', async () => {
  staticRenderer.show(<div id="staticRenderer-test">test</div>, 'test');
  await new Promise<void>((resolve) => {
    setTimeout(() => {
      resolve();
    }, 1000);
  });
  expect(document.body.querySelector('#staticRenderer-test')).toBeTruthy();
  staticRenderer.hide('test');
  await new Promise<void>((resolve) => {
    setTimeout(() => {
      resolve();
    }, 1000);
  });
  expect(document.body.querySelector('#staticRenderer-test')).toBeFalsy();
});
