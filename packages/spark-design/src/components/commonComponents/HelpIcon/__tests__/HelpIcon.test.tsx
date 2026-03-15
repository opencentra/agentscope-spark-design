import { cleanup, render } from '@testing-library/react';
import { afterEach, expect, test } from 'vitest';
import Demo from '../demo/index';
afterEach(cleanup);

test('BLHelpIcon', () => {
  const { container } = render(<Demo />);
  expect(container.querySelector('.blicon')).toBeTruthy();
});
