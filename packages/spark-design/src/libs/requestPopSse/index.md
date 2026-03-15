---
title: POP SSE请求
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

# POP SSE 请求

通过 fetch 请求阿里云 pop sse

```ts | pure
import { requestPopSse, type SseOptions } from '@agentscope-ai/design';

interface MarketingInformationExtractResponse {
  header: Record<string, any>;
  payload: {
    output: any;
    usage: any;
  };
}
async function testRequestPopSse() {
  const options: SseOptions<MarketingInformationExtractResponse> = {
    action: 'RunMarketingInformationExtract',
    product: 'QuanMiaoLightApp',
    region: 'cn-hangzhou',
    version: '2024-08-01',
    params: { workspaceId: 'llm-2setzb9xb8mx6vrc' },
    body: {
      modelId: 'qwen-plus',
      customPrompt:
        '你是一位商品广告设计师，根据下面的产品介绍，生成一句话来描述该产品的卖点。',
      sourceMaterials: ['30岁穿搭｜极简高级感｜不重样经典黑白配穿搭'],
      extractType: 'point',
    },
    onMessage: (data) => {
      console.log(data);
    },
    onClose: () => {
      console.log('close');
    },
    onError: (error) => {
      console.log(error);
    },
  };
  const result = await requestPopSse(options);
  console.log(result);
}

testRequestPopSse();
```

## 用法

```
requestPopSse(options: SseOptions): Promise<SseResponse>:
```

### SseOptions 解释

SseOptions 继承 AliyunPopOptions（Omit<AliyunPopOptions, 'url'>），增加属性如下，AliyunPopOptions 可点击[此处](/hooks/request-pop#requestoptions-解释)查看

| 属性      | 格式                | 解释                           |
| --------- | ------------------- | ------------------------------ |
| body      | any                 | sse 请求参数                   |
| params    | Record<string, any> | 请求 token 的时候的 param 参数 |
| timeout   | number              | 超时时长                       |
| onError   | error => void       | 当出错时回调                   |
| onMessage | data => void        | 当接收到数据时回调             |
| onClose   | () => void          | 关闭时候的回调函数             |

### SseResponse 解释

```
export interface SseResponse {
  /**
   * 取消sse请求
   */
  dispose: () => void;
}
```
