---
title: Button 按钮
group:
  title: 通用
  order: 1
---

<DemoTitle title="Button" desc="按钮用于开始一个即时操作。"></DemoTitle>

<code src="./demo/demo1.tsx" center>示例</code>

<Install>import { Button } from '@agentscope-ai/design'</Install>

#### 按钮示例

以下是此按钮组件的示例和变体

<code src="./demo/demo2.tsx" center>主按钮</code>
<code src="./demo/demo3.tsx" center>次要按钮</code>
<code src="./demo/demo4.tsx" center>文字按钮</code>
<code src="./demo/demo5.tsx" center>紧凑型文字按钮</code>

#### 图标按钮

推荐方式：直接使用 antd 提供的 icon 属性，从@agentscope-ai/icons 中获取对应的 React 组件，或是您的自定义 JSX。
<br/>
便捷方式：我们的按钮组件接受 iconType 属性，如果在 ConfigProvider 中设置了 iconfont 属性，您可以在 iconType 中直接传入图标的 Symbol
<code src="./demo/demo6.tsx" center>图标前置按钮</code>

#### API

<ApiParser source="./index.tsx" id="SparkButtonProps" />

<AntdApiRef url="https://ant.design/components/button-cn/#api"></AntdApiRef>

<div data-embed-hidden></div>

<embed src="../../../antd/docs/button/index.zh-CN.md"></embed>
