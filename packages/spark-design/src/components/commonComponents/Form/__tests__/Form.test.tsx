import { cleanup, render } from '@testing-library/react';
import { afterEach, expect, test } from 'vitest';
import Demo1 from '../demo/demo1';
import Demo2 from '../demo/demo2';
afterEach(cleanup);

test('Form base', () => {
  const { container } = render(<Demo1 />);
  expect(container.querySelector('.blicon')).toBeTruthy();
  const html = container.innerHTML;
  expect(html.includes('用户名')).toBeTruthy();
});

test('Form ref', () => {
  const { container } = render(<Demo2 />);
  expect(container.querySelector('.blicon')).toBeTruthy();
});
