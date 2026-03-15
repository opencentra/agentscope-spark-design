---
title: Button
group:
  title: General
  order: 1
---

<DemoTitle title="Button" desc="Buttons are used to start an instant operation."></DemoTitle>

<code src="./demo/demo1.tsx" center>Example</code>

<Install>import { Button } from '@agentscope-ai/design'</Install>

#### Button Examples

Here are examples and variations of this button component

<code src="./demo/demo2.tsx" center>Primary Button</code>
<code src="./demo/demo3.tsx" center>Secondary Button</code>
<code src="./demo/demo4.tsx" center>Text Button</code>
<code src="./demo/demo5.tsx" center>Compact Text Button</code>

#### Icon Button

Recommended approach: Use the icon property provided by antd directly, get the corresponding React component from @agentscope-ai/icons, or use your custom JSX.
<br/>
Convenient approach: Our button component accepts the iconType property. If the iconfont property is set in ConfigProvider, you can directly pass the icon Symbol in iconType
<code src="./demo/demo6.tsx" center>Icon Prefix Button</code>

#### API

<ApiParser source="./index.tsx" id="SparkButtonProps" />

<AntdApiRef url="https://ant.design/components/button/#api"></AntdApiRef>
