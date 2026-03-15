import { cleanup, render } from '@testing-library/react';
import { afterEach, expect, test } from 'vitest';
import Demo from '../demo/demo1';
afterEach(cleanup);

test('IconFont', () => {
  const { container } = render(<Demo />);
  expect(container.querySelector('.anticon')).toBeTruthy();
});
