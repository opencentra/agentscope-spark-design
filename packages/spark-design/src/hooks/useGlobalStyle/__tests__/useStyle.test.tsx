import { useCommonConfig } from '@/config';
import { cleanup, fireEvent, render } from '@testing-library/react';
import { afterAll, describe, expect, test } from 'vitest';
import Demo from '../demo/demo';

afterAll(cleanup);

describe('useGlobalStyle', () => {
  const { container } = render(<Demo />);
  const { antPrefix } = useCommonConfig();
  test('保证样式渲染只渲染一次', () => {
    const headHtml = document.head.innerHTML;
    const selector = '#useGlobalStyleDemo';
    expect(headHtml).toContain(selector);
    expect(headHtml.lastIndexOf(selector)).toBe(headHtml.indexOf(selector));
  });

  test('样式切换', () => {
    expect(document.head.innerHTML).not.toContain(
      `var(--${antPrefix}-color-warning)`,
    );
    fireEvent.click(container.querySelector('.warning-btn'));
    expect(document.head.innerHTML).toContain(
      `var(--${antPrefix}-color-warning)`,
    );
  });
});
