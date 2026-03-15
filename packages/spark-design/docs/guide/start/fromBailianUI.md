---
title: 4. 从 bailian-ui 迁移
group:
  title: 开发
  order: 3
---

## 从 bailian-ui 迁移

### 1. 从 package.json 中移除@ali/bailian-ui

```shell
tnpm uninstall @ali/bailian-ui
```

### 2. 安装@ali/agentscope-ai-design

```shell
tnpm install @ali/agentscope-ai-design --save
```

### 3. 安装临时依赖

注意：在运行第 4 步前，一定要运行这一步，否则可能会出现 glob 版本不符导致脚本运行失败

```shell
 tnpm install --no-save @babel/parser@^7.26.10 @babel/generator@^7.26.10 glob@^11.0.1
```

### 4. 运行迁移脚本

迁移脚本有两个参数：

- ant-prefix: 你在 ConfigProvider 中设置的 prefix；
- 你的项目原源码路径，例如 src,components。

为了让迁移脚本读取到这两个参数，在当前项目根目录创建 migrate.spark.js，并配置参数如下：

```js
const path = require('path');

module.exports = {
  antPrefix: 'your-prefix', // 换成你自己在ConfigProvider中设置的prefix
  directories: [path.join('src'), path.join('components')], // 需要迁移代码的路径
};
```

然后再运行

```shell
npx migrate-from-bl
```

### 5. 重新运行项目，大功告成！
