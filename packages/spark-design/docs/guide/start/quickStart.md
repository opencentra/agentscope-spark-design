---
title: 2. 快速使用
group:
  title: 开发
  order: 2
---

## 快速使用

在项目最外层组件套一层 ConfigProvider（用法同 AntD 的 ConfigProvider）

```tsx | pure
import { ConfigProvider, bailianTheme, Button } from '@agentscope-ai/design';
import zhCN from 'antd/locale/zh_CN';
import { Flex } from 'antd';

const App = () => {
  return (
    <ConfigProvider
      {...bailianTheme} // 这里使用的是百炼的祖逖，可以根据需要自己修改
      prefix="your-prefix" // 前缀
      iconfont="//at.alicdn.com/t/a/font_4807885_ugexdeaoq7.js" // iconfont的地址（Symbol方法）
      locale={zhCN} // 语言包
    >
      <Flex>
        Hello World!
        <Button>你好</Button>
      </Flex>
    </ConfigProvider>
  );
};

export default App;
```
