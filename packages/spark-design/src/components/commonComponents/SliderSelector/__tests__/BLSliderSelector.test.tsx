import { render } from '@testing-library/react';
import { expect, test } from 'vitest';
import Demo from '../demo';

test('SliderSelector', () => {
  const { container } = render(<Demo />);
  expect(container.querySelector(`.ant-slider`)).toBeTruthy();
  expect(container.querySelector(`.ant-input-number`)).toBeTruthy();
});
