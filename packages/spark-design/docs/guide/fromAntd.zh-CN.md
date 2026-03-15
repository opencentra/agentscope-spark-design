---
order: 2
title: 从 Antd 迁移
group:
  title: 如何使用
  order: 2
---

# 从 Antd 迁移

## 📦 安装

```bash
$ npm install @agentscope-ai/icons @agentscope-ai/design --save
```

## 🔨 使用

从 @agentscope-ai/design 导出的所有同名组件在 API 方面都与 antd 的对应组件兼容，这意味着您无需学习如何使用它们。如果您想充分利用 Alibaba Cloud Spark Design 的新功能，可以尝试使用这些组件而不是 antd 的组件。

```tsx
import {
  Button,
  Image,
  ConfigProvider,
  purpleDarkTheme,
  purpleTheme,
} from '@agentscope-ai/design';
import { SparkSunLine, SparkMoonLine } from '@agentscope-ai/icons';
import { Flex } from 'antd';
import zhCN from 'antd/locale/zh_CN';
import { useState } from 'react';

const App = () => {
  const [colorMode, setColorMode] = useState<'light' | 'dark'>('light');
  const theme = colorMode === 'light' ? purpleTheme : purpleDarkTheme;

  const prefix = 'sps';
  return (
    <ConfigProvider
      {...theme} // 您可以从 purpleTheme、purpleDarkTheme、carbonTheme 和 carbonDarkTheme 中选择
      prefix={prefix} // Ant Design 和 @agentscope-ai/design 的前缀
      prefixCls={prefix}
      iconfont="//at.alicdn.com/t/a/font_4807885_ugexdeaoq7.js" // 可选参数，您可以从 https://www.iconfont.cn/ 获取
      locale={zhCN} // 来自 Ant Design 的语言包
      style={{
        width: '100%',
        height: '100%',
      }}
    >
      <div
        style={{
          width: '100%',
          height: '100%',
          backgroundColor: `var(--${prefix}-color-bg-base)`,
        }}
      >
        <Flex vertical gap={16} align="center" style={{ padding: '12px 0' }}>
          <Image
            width={120}
            src="https://img.alicdn.com/imgextra/i1/O1CN01Py27NU1re2pgohzqU_!!6000000005655-0-tps-480-480.jpg"
          />
          <div
            style={{
              color: `var(--${prefix}-ant-color-text-base)`,
              fontSize: '24px',
              textAlign: 'center',
            }}
          >
            Hello Spark Design!
          </div>
          <Button
            type="primary"
            onClick={() => {
              setColorMode(colorMode === 'light' ? 'dark' : 'light');
            }}
            icon={colorMode === 'light' ? <SparkMoonLine /> : <SparkSunLine />}
          >
            {colorMode === 'light' ? '暗色' : '亮色'} 模式
          </Button>
        </Flex>
      </div>
    </ConfigProvider>
  );
};

export default App;
```

如果您想继续使用 antd 的组件，那也没问题。您只需要将 antd 的 ConfigProvider 替换为 @agentscope-ai/design 的即可。

```tsx
import {
  ConfigProvider,
  purpleDarkTheme,
  purpleTheme,
} from '@agentscope-ai/design';
import { Button, Image, Flex } from 'antd';
import { SparkSunLine, SparkMoonLine } from '@agentscope-ai/icons';
import zhCN from 'antd/locale/zh_CN';
import { useState } from 'react';

const App = () => {
  const [colorMode, setColorMode] = useState<'light' | 'dark'>('light');
  const theme = colorMode === 'light' ? purpleTheme : purpleDarkTheme;

  const prefix = 'sps';
  return (
    <ConfigProvider
      {...theme} // 您可以从 purpleTheme、purpleDarkTheme、carbonTheme 和 carbonDarkTheme 中选择
      prefix={prefix} // Ant Design 和 @agentscope-ai/design 的前缀
      prefixCls={prefix}
      iconfont="//at.alicdn.com/t/a/font_4807885_ugexdeaoq7.js" // 可选参数，您可以从 https://www.iconfont.cn/ 获取
      locale={zhCN} // 来自 Ant Design 的语言包
      style={{
        width: '100%',
        height: '100%',
      }}
    >
      <div
        style={{
          width: '100%',
          height: '100%',
          backgroundColor: `var(--${prefix}-color-bg-base)`,
        }}
      >
        <Flex vertical gap={16} align="center" style={{ padding: '12px 0' }}>
          <Image
            width={120}
            src="https://img.alicdn.com/imgextra/i1/O1CN01Py27NU1re2pgohzqU_!!6000000005655-0-tps-480-480.jpg"
          />
          <div
            style={{
              color: `var(--${prefix}-ant-color-text-base)`,
              fontSize: '24px',
              textAlign: 'center',
            }}
          >
            Hello Spark Design!
          </div>
          <Button
            type="primary"
            onClick={() => {
              setColorMode(colorMode === 'light' ? 'dark' : 'light');
            }}
            icon={colorMode === 'light' ? <SparkMoonLine /> : <SparkSunLine />}
          >
            {colorMode === 'light' ? '暗色' : '亮色'} 模式
          </Button>
        </Flex>
      </div>
    </ConfigProvider>
  );
};

export default App;
```
