---
title: SSE请求
group:
  title: 工具函数
  order: 1
nav:
  title: 开发
  order: 2
  second:
    title: hooks/工具
    order: 5
demo:
  cols: 1
---

# SSE 请求

从[@microsoft/fetch-event-source](https://github.com/Azure/fetch-event-source/blob/main/README.md)拷贝过来，改动点如下

1. 请求失败且取消请求后，避免自动发起新请求
2. 增加参数控制请求失败后是否自动发起新请求
3. 增加 autoRetryTime 用于控制失败是否自动发起请求，默认 false

```jsx | pure
import { requestSse } from '@agentscope-ai/design';

await requestSse('/api/sse', {
  onmessage(ev) {
    console.log(ev.data);
  },
});
```

## 用法

requestSse(api, options)

### options 解释

| 属性          | 格式                     | 解释                                                                                    |
| ------------- | ------------------------ | --------------------------------------------------------------------------------------- |
| method        | string                   | 请求方法                                                                                |
| headers       | {[key: string]: string } | 请求表头                                                                                |
| body          | string                   | 请求体数据                                                                              |
| onopen        | () => void               | 当接收开始时回调                                                                        |
| onmessage     | event => void            | 当接收到数据时回调                                                                      |
| onerror       | error => void            | 当出错时回调                                                                            |
| autoRetryTime | number                   | 自动重试次数                                                                            |
| timeout       | number                   | 请求超时时间，单位 ms，默认 60\*1000ms, 当为 0 时表示前端不加超时限制 （0.1.1 版本添加) |
| signal        | AbortController.signal   | 取消请求控制                                                                            |
| debug         | boolean                  | 调试参数，日志中输出更多详细信息                                                        |

可以通过`AbortController`手动取消请求

```jsx | pure
const ctrl = new AbortController();
requestSSE('/api/sse', {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json',
  },
  body: JSON.stringify({
    foo: 'bar',
  }),
  signal: ctrl.signal,
});
```

事件处理

```js | pure
class RetriableError extends Error {}
class FatalError extends Error {}
requestSSE('/api/sse', {
  async onopen(response) {
    if (
      response.ok &&
      response.headers.get('content-type') === EventStreamContentType
    ) {
      return; // everything's good
    } else if (
      response.status >= 400 &&
      response.status < 500 &&
      response.status !== 429
    ) {
      // client-side errors are usually non-retriable:
      throw new FatalError();
    } else {
      throw new RetriableError();
    }
  },
  onmessage(msg) {
    // if the server emits an error message, throw an exception
    // so it gets handled by the onerror callback below:
    if (msg.event === 'FatalError') {
      throw new FatalError(msg.data);
    }
  },
  onclose() {
    // if the server closes the connection unexpectedly, retry:
    throw new RetriableError();
  },
  onerror(err) {
    if (err instanceof FatalError) {
      throw err; // rethrow to stop the operation
    } else {
      // do nothing to automatically retry. You can also
      // return a specific retry interval here.
    }
  },
});
```
