---
title: POP请求
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

# POP 请求

通过 fetch 请求阿里云 pop 网关

```ts | pure
import {
  requestPop,
  type RequestOptions,
  type BaseResponse,
} from '@agentscope-ai/design';

interface ResponseData {
  /**
   * 请求domain地址
   */
  uri: string;
  /**
   * 请求路径
   */
  path: string;
  /**
   * 请求方法
   */
  method: string;
  /**
   * 请求query参数
   */
  query: Record<string, string>;
  /**
   * 请求header参数
   */
  headers: Record<string, string>;

  /**
   * 请求body参数
   */
  body: string;
}

async function getSseToken(action: string, body: Record<string, any>) {
  const options: RequestOptions = {
    action,
    product: 'QuanMiaoLightApp',
    region: 'cn-hangzhou',
    url: '/tool/sse/get.json',
    version: '2024-08-01',
  };
  return requestPop<BaseResponse<ResponseData>>(
    options,
    { workspaceId: 'workspaceId' },
    {
      content: JSON.stringify(body),
    },
  );
}

async function testGetSseToken() {
  try {
    const result = await getSseToken('RunMarketingInformationExtract', {
      modelId: 'qwen-plus',
      customPrompt:
        '你是一位商品广告设计师，根据下面的产品介绍，生成一句话来描述该产品的卖点。',
      sourceMaterials: ['30岁穿搭｜极简高级感｜不重样经典黑白配穿搭'],
      extractType: 'point',
    });
    console.log(result, '请求成功');
  } catch (error) {
    console.log(error, '请求出错');
  }
}

testGetSseToken();
```

## 用法

```
requestPop(options: RequestOptions, data?: Record<string, any>, extraParams?: Record<string, any>)
```

### 参数解释

| 属性        | 格式                | 解释                                          |
| ----------- | ------------------- | --------------------------------------------- |
| options     | RequestOptions 对象 | 请求配置                                      |
| data        | Record<string, any> | 请求 body 参数，放入 params 中                |
| extraParams | Record<string, any  | 请求其他参数，如{content: "xxx"} roa 风格可用 |

### RequestOptions 解释

基本属性如下，同时支持 RequestInit 的参数，具体自行了解[RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/RequestInit)

| 属性    | 格式   | 解释                          |
| ------- | ------ | ----------------------------- |
| action  | string | 请求 action                   |
| product | string | QuanMiaoLightApp              |
| region  | string | 区域如 cn-hangzhou            |
| url     | string | 请求地址， 默认/data/api.json |
| version | string | 版本号                        |
