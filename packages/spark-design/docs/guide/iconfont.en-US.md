---
order: 2
title: Usage with Iconfont
group:
  title: icons
  order: 4
---

# Usage

If you have your own iconfont project, you can integrate your icons into Spark Design and access your icon with simply a symbol name.

```tsx
import {
  ConfigProvider,
  purpleTheme,
  Button,
  IconFont,
  IconButton,
} from '@agentscope-ai/design';
import { Flex } from 'antd';
import zhCN from 'antd/locale/zh_CN';
import { useState } from 'react';

const App = () => {
  const prefix = 'sps';
  const iconSymbol = 'spark-effciency-line';
  const iconfont = '//at.alicdn.com/t/a/font_4807885_ugexdeaoq7.js'; // you can get it from https://www.iconfont.cn/
  return (
    <ConfigProvider
      {...purpleTheme}
      prefix={prefix}
      prefixCls={prefix}
      iconfont={iconfont}
      locale={zhCN}
      style={{
        width: '100%',
        height: '100%',
      }}
    >
      <Flex
        style={{
          width: '100%',
          height: '100%',
          backgroundColor: `var(--${prefix}-color-bg-base)`,
        }}
        justify="center"
        align="center"
      >
        <Flex vertical gap={16} style={{ width: '300px', padding: '12px 0' }}>
          <Flex gap={8}>
            <div style={{ width: '100px', lineHeight: '32px' }}>IconFont:</div>
            <IconFont type={iconSymbol} />
          </Flex>
          <Flex gap={8}>
            <div style={{ width: '100px', lineHeight: '32px' }}>Button:</div>
            <Button type="primary" iconType={iconSymbol}>
              Add User
            </Button>
          </Flex>
          <Flex gap={8}>
            <div style={{ width: '100px', lineHeight: '32px' }}>
              IconButton:
            </div>
            <IconButton iconType={iconSymbol}></IconButton>
          </Flex>
        </Flex>
      </Flex>
    </ConfigProvider>
  );
};

export default App;
```
