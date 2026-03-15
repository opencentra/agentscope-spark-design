/**
 * 延迟函数
 * @param timeout 超时时间
 * @returns
 */
export default async function delay(timeout = 100) {
  return new Promise((resolve) => {
    setTimeout(resolve, timeout);
  });
}
