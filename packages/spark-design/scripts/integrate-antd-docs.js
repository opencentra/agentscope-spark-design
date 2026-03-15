#!/usr/bin/env node

const fs = require('fs');
const path = require('path');

/**
 * 自动化整合 Antd 组件文档到 Spark 组件文档
 *
 * 执行步骤：
 * 1. 从 src/antd/docs 目录读取 antd 文档
 * 2. 删除 antd 文档的非 API 部分
 * 3. 将 ## API 重命名为 ## antd API
 * 4. 检查组件 props 重复字段并删除
 * 5. 通过 embed 方式引入到 spark 文档末尾
 */

const COMMON_COMPONENTS_DIR = './src/components/commonComponents';
const DOCS_ANTD_DIR = './src/antd/docs';

/**
 * 获取目录下所有的文件夹名称
 */
function getDirectories(srcPath) {
  try {
    return fs
      .readdirSync(srcPath, { withFileTypes: true })
      .filter((dirent) => dirent.isDirectory())
      .map((dirent) => dirent.name);
  } catch (error) {
    console.error(`读取目录失败: ${srcPath}`, error.message);
    return [];
  }
}

/**
 * 检查文件是否存在
 */
function fileExists(filePath) {
  try {
    return fs.existsSync(filePath);
  } catch (error) {
    return false;
  }
}

/**
 * 读取文件内容
 */
function readFile(filePath) {
  try {
    return fs.readFileSync(filePath, 'utf8');
  } catch (error) {
    console.error(`读取文件失败: ${filePath}`, error.message);
    return null;
  }
}

/**
 * 写入文件内容
 */
function writeFile(filePath, content) {
  try {
    fs.writeFileSync(filePath, content, 'utf8');
    return true;
  } catch (error) {
    console.error(`写入文件失败: ${filePath}`, error.message);
    return false;
  }
}

/**
 * 处理 antd 文档：删除非 API 部分，重命名 API 标题，修复伪代码块
 */
function processAntdDoc(content) {
  const lines = content.split('\n');
  const processedLines = [];
  let inApiSection = false;
  let foundApi = false;

  // 需要停止处理的标题列表
  const stopTitles = [
    '## 主题变量（Design Token）',
    '## Design Token',
    '## 设计指引',
    '## FAQ',
    '## Semantic DOM',
  ];

  for (let i = 0; i < lines.length; i++) {
    const line = lines[i];

    // 找到 API 部分的开始
    if (line.trim() === '## API' || line.trim() === '## antd API') {
      inApiSection = true;
      foundApi = true;
      processedLines.push('## antd API');
      continue;
    }

    // 如果还没找到 API 部分，跳过所有内容
    if (!foundApi) {
      continue;
    }

    // 在 API 部分中，检查是否遇到需要停止的标题
    if (inApiSection) {
      // 检查是否是停止标题
      const isStopTitle = stopTitles.some(
        (stopTitle) =>
          line.trim() === stopTitle || line.trim().startsWith(stopTitle),
      );

      if (isStopTitle) {
        // 遇到停止标题，结束 API 部分的处理
        break;
      }

      // 修复伪代码块：将 ```jsx 和 ```tsx 改为 ```jsx | pure 和 ```tsx | pure
      if (line.trim() === '```jsx') {
        processedLines.push('```jsx | pure');
        continue;
      }
      if (line.trim() === '```tsx') {
        processedLines.push('```tsx | pure');
        continue;
      }
      if (line.trim() === '```js') {
        processedLines.push('```js | pure');
        continue;
      }
      if (line.trim() === '```ts') {
        processedLines.push('```ts | pure');
        continue;
      }

      // 保留 shared/ 目录的引用，不删除

      processedLines.push(line);
    }
  }

  // 如果没有找到 API 部分，返回空字符串
  if (!foundApi) {
    console.log('  ⚠️  未找到 API 部分');
    return '';
  }

  return processedLines.join('\n');
}

/**
 * 将组件名转换为 antd 格式（转小写并用连字符连接）
 */
function toAntdComponentName(componentName) {
  // 处理特殊组件名映射
  const specialMappings = {
    AlertDialog: 'alert',
    IconButton: 'button',
    InputNumber: 'input-number',
    DatePicker: 'date-picker',
    TimePicker: 'time-picker',
    RadioButton: 'radio',
    FloatButton: 'float-button',
    CollapsePanel: 'collapse',
    InputSearch: 'input',
  };

  if (specialMappings[componentName]) {
    return specialMappings[componentName];
  }

  // 常规转换：驼峰转连字符小写
  return componentName
    .replace(/([A-Z])/g, '-$1')
    .toLowerCase()
    .replace(/^-/, ''); // 去掉开头的连字符
}

/**
 * 从 TypeScript 接口定义中提取 props 字段名
 */
function extractPropsFromInterface(content) {
  const props = [];

  // 匹配接口定义
  const interfaceRegex = /interface\s+\w*Props[^{]*\{([^}]+)\}/gs;
  const matches = content.matchAll(interfaceRegex);

  for (const match of matches) {
    const interfaceBody = match[1];

    // 提取属性名
    const propRegex = /^\s*(\w+)[\?\:]?\s*:\s*/gm;
    const propMatches = interfaceBody.matchAll(propRegex);

    for (const propMatch of propMatches) {
      props.push(propMatch[1]);
    }
  }

  return props;
}

/**
 * 从 antd 文档中删除重复的 props 字段
 */
function removeDuplicateProps(antdContent, componentProps) {
  if (componentProps.length === 0) {
    return antdContent;
  }

  const lines = antdContent.split('\n');
  const processedLines = [];
  let inTable = false;

  for (let i = 0; i < lines.length; i++) {
    const line = lines[i];

    // 检测表格开始
    if (
      line.includes('| 参数 | 说明 | 类型') ||
      line.includes('| 属性 | 说明 | 类型') ||
      line.includes('| --- | --- | ---')
    ) {
      inTable = true;
      processedLines.push(line);
      continue;
    }

    // 检测表格结束（空行或非表格行）
    if (inTable && (!line.trim() || !line.startsWith('|'))) {
      inTable = false;
    }

    // 如果在表格中，检查是否是重复的 prop
    if (inTable && line.startsWith('|')) {
      const propMatch = line.match(/^\|\s*(\w+)\s*\|/);
      if (propMatch) {
        const propName = propMatch[1];
        if (componentProps.includes(propName)) {
          console.log(`    删除重复字段: ${propName}`);
          continue; // 跳过这一行
        }
      }
    }

    processedLines.push(line);
  }

  return processedLines.join('\n');
}

/**
 * 更新 spark 文档，添加 embed
 */
function updateSparkDoc(sparkDocPath, componentName) {
  const content = readFile(sparkDocPath);
  if (!content) {
    return false;
  }

  // 获取 antd 组件名
  const antdComponentName = toAntdComponentName(componentName);
  const newEmbedPath = `../../../antd/docs/${antdComponentName}/index.zh-CN.md`;
  const oldEmbedPath = `./DocsFromAntd/index.zh-CN.md`;

  // 检查是否已经有新的 embed
  if (content.includes(`<embed src="${newEmbedPath}"></embed>`)) {
    console.log('  ℹ️  已存在新 embed，跳过');
    return true;
  }

  let newContent = content;

  // 删除所有旧的 embed 路径
  const oldPaths = [
    `./DocsFromAntd/index.zh-CN.md`,
    `../../docs/antd/${antdComponentName}/index.zh-CN.md`,
    `../../src/antd/docs/${antdComponentName}/index.zh-CN.md`,
  ];

  for (const oldPath of oldPaths) {
    if (newContent.includes(`<embed src="${oldPath}"></embed>`)) {
      console.log(`  🗑️  删除旧 embed: ${oldPath}`);
      newContent = newContent.replace(`<embed src="${oldPath}"></embed>`, '');
    }
  }

  // 在文档末尾添加新的 embed
  console.log('  📎 添加新 embed');
  const embedContent = `\n\n<embed src="${newEmbedPath}"></embed>`;
  newContent = newContent.trim() + embedContent;

  return writeFile(sparkDocPath, newContent);
}

/**
 * 处理单个组件
 */
function processComponent(componentName) {
  console.log(`\n处理组件: ${componentName}`);

  const componentDir = path.join(COMMON_COMPONENTS_DIR, componentName);
  const antdComponentName = toAntdComponentName(componentName);
  const antdDocPath = path.join(
    DOCS_ANTD_DIR,
    antdComponentName,
    'index.zh-CN.md',
  );
  const componentIndexPath = path.join(componentDir, 'index.tsx');
  const sparkDocPath = path.join(componentDir, 'index.zh-CN.md');

  console.log(`  映射: ${componentName} -> ${antdComponentName}`);

  // 检查必要文件是否存在
  if (!fileExists(antdDocPath)) {
    console.log('  ⚠️  跳过: 没有 antd 文档');
    return false;
  }

  // 总是处理 antd 文档（清理非 API 部分）
  console.log('  📝 处理 antd 文档...');
  const antdContent = readFile(antdDocPath);
  if (!antdContent) {
    console.log('  ❌ 读取 antd 文档失败');
    return false;
  }

  const processedAntdContent = processAntdDoc(antdContent);
  if (!processedAntdContent.trim()) {
    console.log('  ⚠️  跳过: antd 文档没有 API 部分');
    return false;
  }

  // 写入处理后的 antd 文档
  if (!writeFile(antdDocPath, processedAntdContent)) {
    console.log('  ❌ 写入 antd 文档失败');
    return false;
  }

  if (!fileExists(sparkDocPath)) {
    console.log('  ⚠️  跳过: 没有 spark 文档，但 antd 文档已处理');
    return true; // 返回 true 因为 antd 文档已经被处理了
  }

  // antd 文档已经在上面处理过了

  // 读取组件定义，提取 props
  let componentProps = [];
  if (fileExists(componentIndexPath)) {
    console.log('  🔍 检查组件 props...');
    const componentContent = readFile(componentIndexPath);
    if (componentContent) {
      componentProps = extractPropsFromInterface(componentContent);
      console.log(`    发现 props: ${componentProps.join(', ')}`);
    }
  }

  // 删除重复的 props（需要重新读取已处理的 antd 文档）
  if (componentProps.length > 0) {
    console.log('  🧹 删除重复字段...');
    const currentAntdContent = readFile(antdDocPath);
    if (currentAntdContent) {
      const cleanedContent = removeDuplicateProps(
        currentAntdContent,
        componentProps,
      );
      if (!writeFile(antdDocPath, cleanedContent)) {
        console.log('  ⚠️  删除重复字段失败');
      }
    } else {
      console.log('  ⚠️  读取 antd 文档失败，无法删除重复字段');
    }
  }

  // 更新 spark 文档，添加 embed
  console.log('  📎 添加 embed 到 spark 文档...');
  if (!updateSparkDoc(sparkDocPath, componentName)) {
    return false;
  }

  console.log('  ✅ 处理完成');
  return true;
}

/**
 * 主函数
 */
function main() {
  console.log('开始整合 Antd 组件文档到 Spark 组件文档...\n');

  // 检查目录是否存在
  if (!fs.existsSync(COMMON_COMPONENTS_DIR)) {
    console.error(
      `错误: commonComponents 目录不存在: ${COMMON_COMPONENTS_DIR}`,
    );
    process.exit(1);
  }

  // 获取所有组件目录
  const componentDirs = getDirectories(COMMON_COMPONENTS_DIR);
  console.log(`发现 ${componentDirs.length} 个组件\n`);

  let successCount = 0;
  let skipCount = 0;
  let errorCount = 0;

  // 处理每个组件
  componentDirs.forEach((componentName) => {
    try {
      const result = processComponent(componentName);
      if (result) {
        successCount++;
      } else {
        skipCount++;
      }
    } catch (error) {
      console.error(`  ❌ 处理失败: ${error.message}`);
      errorCount++;
    }
  });

  console.log(`\n整合完成!`);
  console.log(`成功: ${successCount} 个`);
  console.log(`跳过: ${skipCount} 个`);
  console.log(`失败: ${errorCount} 个`);

  if (errorCount > 0) {
    process.exit(1);
  }
}

// 运行脚本
if (require.main === module) {
  main();
}

module.exports = {
  main,
  processAntdDoc,
  extractPropsFromInterface,
  removeDuplicateProps,
};
