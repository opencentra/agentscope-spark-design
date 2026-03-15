---
order: 2
title: Tokens 和 CSS 变量
group:
  title: 主题和样式
  order: 3
---

# Tokens

除了来自 [antd](https://ant.design/theme-editor) 的固有 tokens 之外，Spark Design 在原有基础上扩展了更多变量。完整的 token 示例如下所示：

<div><span style="display: inline-block; width: 12px; height: 12px; background-color: #615CED;"></span> purpleTheme</div>

<<< ../../src/antd/themes/bailianTheme.json

<div><span style="display: inline-block; width: 12px; height: 12px; background-color: #5551CC;"></span> purpleDarkTheme（暗色模式）</div>

<<< ../../src/antd/themes/bailianDarkTheme.json

<div><span style="display: inline-block; width: 12px; height: 12px; background-color: rgba(26, 26, 29, 1);"></span> carbonTheme</div>

<<< ../../src/antd/themes/carbonTheme.json

<div><span style="display: inline-block; width: 12px; height: 12px; background-color: rgba(26, 26, 29, 1);"></span> carbonDarkTheme</div>

<<< ../../src/antd/themes/carbonDarkTheme.json

# CSS 变量

Spark Design 默认启用 cssVar 模式，因此您可以利用 从 token 派生出的 CSS 变量来构建自己的样式。

```less
.example {
  background: var(--sps-color-bg-base);
  color: var(--sps-color-pink);
}
// 提示：您可以将 'sps' 替换为您自己的前缀
```
