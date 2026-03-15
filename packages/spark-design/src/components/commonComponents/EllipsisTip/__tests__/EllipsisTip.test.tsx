import { cleanup, render } from '@testing-library/react';
import { afterEach, expect, test } from 'vitest';
import Demo1 from '../demo/demo1';
afterEach(cleanup);

test('BLEllipsisTip', () => {
  const { container } = render(<Demo1 />);
  expect(container.querySelector('.bl-ellipsis-tip')).toBeTruthy();
});
