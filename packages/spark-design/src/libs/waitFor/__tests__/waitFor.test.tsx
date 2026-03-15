import { afterEach, expect, test } from 'vitest';
import { waitForFunc, waitForDom } from '..';
import { cleanup, render } from '@testing-library/react';
import { useEffect, useState } from 'react';

afterEach(cleanup);


test('waitForFunc', async () => {
  let count = 0;
  await waitForFunc(
    () => {
      count += 1;
      return count > 2;
    },
    { intervalTime: 1 },
  );
  expect(count).toBe(3);
});


test('waitForDom', async () => {
  function Demo() {
    const [show, setShow] = useState(false);
    useEffect(() => {
      setTimeout(() => {
        setShow(true);
      }, 50);
    }, []);
    return show ? <div id="test">已展示</div> : null;
  }
  const { container } = render(<Demo />);
  expect(container.querySelector('#test')).toBeNull();
  await waitForDom('#test');
  expect(container.querySelector('#test')).toBeTruthy();
});

