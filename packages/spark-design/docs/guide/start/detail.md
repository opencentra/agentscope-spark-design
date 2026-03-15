---
title: 3. 进阶使用
group:
  title: 开发
  order: 4
---

## 主题与 css 变量

需要在 ConfigProvider 传入主题，示例代码里使用的是百炼主题，可以根据自己的需求修改。

```tsx | pure
import { ConfigProvider, bailianTheme } from '@agentscope-ai/design';

const App = () => {
  return (
    <ConfigProvider
      {...bailianTheme} // 这里使用的是百炼的祖逖，可以根据需要自己修改
    >
      <div>Hello World!</div>
    </ConfigProvider>
  );
};

export default App;
```

主题配置和 antd 的 ConfigProvider 入参完全一致，可以参考 antd 的文档。

在设计稿中复制出来的变量名称， <span style="color: red;font-weight:bold;">添加在 ConfigProvider 里设置的 prefix</span>后可以直接当做 css variables 使用，例如：

**设计稿中复制的变量名称** ：品牌主色/主题-默认--color-primary-base

**css variables** ：var(--<span style="color: red;font-weight:bold;">your-prefix</span>-color-primary-base)

## 修改前缀

<p style="color: red;">百炼轻应用必须修改前缀，以免污染百炼主站的样式</p>
<p style="color: red;">注意，如果嵌套使用ConfigProvider，请在父ConfigProvider统一设置prefix，子ConfigProvider不要设置prefix</p>
1. 在ConfigProvider里增加 **prefix**

```tsx | pure
import { ConfigProvider } from '@agentscope-ai/design';

const App = () => {
  return (
    <ConfigProvider
      iconfont="//at.alicdn.com/t/a/font_4807885_ugexdeaoq7.js"
      prefix="your-prefix"
    >
      <div>Hello World!</div>
    </ConfigProvider>
  );
};

export default App;
```

ConfigProvider 参数解释如下，更多参数请参考 antd 的 [ConfigProvider](https://ant.design/components/config-provider-cn)

| 参数名    | 类型                  | 描述                                                              | 默认值 |
| --------- | --------------------- | ----------------------------------------------------------------- | ------ |
| prefix    | `string`              | 用于拼接 antd 和 spark 组件的前缀，无特殊需求只传这个前缀即可     | 无     |
| iconfont  | `string`              | 图标字体的 URL,例如//at.alicdn.com/t/a/font_4807885_ugexdeaoq7.js | 无     |
| className | `string`              | 自定义类名                                                        | 无     |
| style     | `React.CSSProperties` | 自定义内联样式                                                    | 无     |
| children  | `React.ReactNode`     | 子组件内容                                                        | 无     |

## 修改 iconFontUrl

iconfont 项目地址：https://www.iconfont.cn/manage/index?spm=a313x.home_index.i3.22.58a33a81rbqwMb&manage_type=myprojects&projectId=4807885
如没有权限，找@寸雨

<p style="color: red;">随着业务迭代，iconfont也会不断变更</p> 
<p style="color: red;">如果不传，会有一个兜底的初版url，但是这可能不包含你所需要的icon</p>
