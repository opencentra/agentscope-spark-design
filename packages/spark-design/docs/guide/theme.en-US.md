---
order: 1
title: Theme
group:
  title: Theme and Style
  order: 3
---

## Built-in themes

Alibaba Cloud Spark Design provides four built-in themes:

<div><span style="display: inline-block; width: 12px; height: 12px; background-color: #615CED;"></span> purpleTheme</div>
<div><span style="display: inline-block; width: 12px; height: 12px; background-color: #5551CC;"></span> purpleDarkTheme (for dark mode)</div>
<div><span style="display: inline-block; width: 12px; height: 12px; background-color: rgba(26, 26, 29, 1);"></span> carbonTheme</div>
<div><span style="display: inline-block; width: 12px; height: 12px; background-color: #676767;"></span> carbonDarkTheme (for dark mode)</div>

### Example Usage

```tsx | pure
import { ConfigProvider, purpleTheme } from '@agentscope-ai/design';

const App = () => {
  return <ConfigProvider {...purpleTheme}>Hello Spark Design!</ConfigProvider>;
};

export default App;
```

## Generate your own theme from Antd token

If you've already had an Antd theme, you can still generate a spark-style theme by using generateThemeByToken

```tsx | pure
import { ConfigProvider, generateThemeByToken } from '@agentscope-ai/design';
const yourToken = {
  borderRadiusXS: 2,
  borderRadiusSM: 4,
  borderRadius: 6,
  borderRadiusLG: 8,
  borderRadiusXL: 12,
  borderRadiusFull: 999,
  wireframe: false,
  colorPrimaryBg: '#F2F0FF',
  colorPrimaryBgHover: '#F2F0FF',
  colorPrimaryBorder: '#E2DEFF',
  colorPrimaryBorderHover: '#BCB5FF',
  // ... you can find full version of tokens in the next doc: Tokens and Css Variables
};
const darkMode = false;
const yourThemeWithSparkStyle = generateThemeByToken(yourToken, darkMode);
const App = () => {
  return (
    <ConfigProvider {...yourThemeWithSparkStyle}>
      Hello Spark Design!
    </ConfigProvider>
  );
};

export default App;
```

Still, you can modify the generated theme: `yourThemeWithSparkStyle`, which is not recommended. We suggest you to keep the original theme for the best experience of Spark Design.
