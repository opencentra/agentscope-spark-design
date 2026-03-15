interface WaitForOptions {
  /** 最长等待时间
   * @default 5000
   */
  timeout?: number;
  /** 执行判断间隔时间，单位ms
   * @default 100
   */
  intervalTime?: number;
}

/**
 * 等待函数执行成功
 * @param func dom的css选择器
 * @param option 控制参数
 * @returns Promise<any>
 */
export function waitForFunc<FuncResult>(
  func: () => FuncResult,
  { timeout = 5000, intervalTime = 100 }: WaitForOptions = {},
): Promise<FuncResult> {
  const start = Date.now();
  return new Promise((resolve, reject) => {
    const interval = setInterval(() => {
      const result = func();
      if (result) {
        clearInterval(interval);
        resolve(result);
      } else if (Date.now() - start > timeout) {
        reject('timeout');
        clearInterval(interval);
      }
    }, intervalTime);
  });
}

/**
 * 等待出现在指定dom
 * @param selector dom的css选择器
 * @param option 控制参数
 * @returns Promise<any>
 */
export function waitForDom(
  selector: string,
  opts: WaitForOptions = {},
): Promise<HTMLElement> {
  return waitForFunc(() => document.querySelector(selector), opts);
}
