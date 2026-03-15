---
order: 2
title: Tokens and Css Variables
group:
  title: Theme and Style
  order: 3
---

# Tokens

Apart from the inherent tokens from [antd](https://ant.design/theme-editor), Spark Design has expanded more variables on the original basis. A full token example is shown below:

<div><span style="display: inline-block; width: 12px; height: 12px; background-color: #615CED;"></span> purpleTheme</div>

<<< ../../src/antd/themes/bailianTheme.json

<div><span style="display: inline-block; width: 12px; height: 12px; background-color: #5551CC;"></span> purpleDarkTheme (for dark mode)</div>

<<< ../../src/antd/themes/bailianDarkTheme.json

<div><span style="display: inline-block; width: 12px; height: 12px; background-color: rgba(26, 26, 29, 1);"></span> carbonTheme</div>

<<< ../../src/antd/themes/carbonTheme.json

<div><span style="display: inline-block; width: 12px; height: 12px; background-color: rgba(26, 26, 29, 1);"></span> carbonDarkTheme</div>

<<< ../../src/antd/themes/carbonDarkTheme.json

# Css Variables

Spark Design enables the cssVar mode by default, thus you can take advantage of the CSS variables derived from tokens to build your own styles.

```less
.example {
  background: var(--sps-color-bg-base);
  color: var(--sps-color-pink);
}
// tips: you can replace 'sps' with your own prefix
```
