import { ConfigProvider } from '@agentscope-ai/design';
import { cleanup, render } from '@testing-library/react';
import { afterEach, describe, expect, test } from 'vitest';

afterEach(cleanup);

describe('BlConfigProvider', () => {
  test('should render className and styles', () => {
    function Demo() {
      return (
        <ConfigProvider className="test-class" style={{ height: '100%' }}>
          <textarea placeholder="请输入内容" />
        </ConfigProvider>
      );
    }
    const { container } = render(<Demo />);
    expect(container.querySelector('.test-class')).toBeTruthy();
    expect(container.innerHTML).includes('height: 100%;');
  });
});
