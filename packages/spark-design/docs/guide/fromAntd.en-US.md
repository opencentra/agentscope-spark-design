---
order: 2
title: Migrate from Antd
group:
  title: How to use
  order: 2
---

# Migrate from Antd

## 📦 Install

```bash
$ npm install @agentscope-ai/icons @agentscope-ai/design --save
```

## 🔨 Usage

All the eponymous components exported from @agentscope-ai/design are compatible with their counterparts from antd in terms of API, which means you don't need to learn how to use them. If you want to make full use of the new features of Alibaba Cloud Spark Design, you can try those components instead of those from antd.

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
      {...theme} // you can choose from purpleTheme, purpleDarkTheme, carbonTheme and carbonDarkTheme
      prefix={prefix} // prefix for Ant Design and @agentscope-ai/design
      prefixCls={prefix}
      iconfont="//at.alicdn.com/t/a/font_4807885_ugexdeaoq7.js" // optional parameter, you can get it from https://www.iconfont.cn/
      locale={zhCN} // language pack from Ant Design
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
            {colorMode === 'light' ? 'dark' : 'light'} mode
          </Button>
        </Flex>
      </div>
    </ConfigProvider>
  );
};

export default App;
```

If you want to keep using components from antd, that's ok. All you need to do is replacing the ConfigProvider from antd with the one from @agentscope-ai/design.

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
      {...theme} // you can choose from purpleTheme, purpleDarkTheme, carbonTheme and carbonDarkTheme
      prefix={prefix} // prefix for Ant Design and @agentscope-ai/design
      prefixCls={prefix}
      iconfont="//at.alicdn.com/t/a/font_4807885_ugexdeaoq7.js" // optional parameter, you can get it from https://www.iconfont.cn/
      locale={zhCN} // language pack from Ant Design
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
            {colorMode === 'light' ? 'dark' : 'light'} mode
          </Button>
        </Flex>
      </div>
    </ConfigProvider>
  );
};

export default App;
```
