#!/usr/bin/env node

const fs = require('fs');
const path = require('path');

/**
 * 复制 Antd 组件文档到 src/antd/docs 目录
 *
 * 脚本逻辑：
 * 1. 扫描 src/components/commonComponents 目录下的所有组件
 * 2. 检查每个组件是否在 ../ant-design/components 中存在同名组件
 * 3. 如果存在，将 ../ant-design/components/{组件名}/index.zh-CN.md 复制到
 *    src/antd/docs/{组件名}/index.zh-CN.md，保持相互引用
 */

const COMMON_COMPONENTS_DIR = '../src/components/commonComponents';
const ANTD_COMPONENTS_DIR = '../../../ant-design/components';
const DOCS_ANTD_DIR = '../src/antd/docs';

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
 * 创建目录（如果不存在）
 */
function ensureDirectory(dirPath) {
  if (!fs.existsSync(dirPath)) {
    fs.mkdirSync(dirPath, { recursive: true });
    console.log(`创建目录: ${dirPath}`);
  }
}

/**
 * 复制文件
 */
function copyFile(src, dest) {
  try {
    fs.copyFileSync(src, dest);
    return true;
  } catch (error) {
    console.error(`复制文件失败: ${src} -> ${dest}`, error.message);
    return false;
  }
}

/**
 * 递归复制目录
 */
function copyDirectory(src, dest) {
  try {
    // 确保目标目录存在
    ensureDirectory(dest);

    // 读取源目录内容
    const items = fs.readdirSync(src, { withFileTypes: true });

    for (const item of items) {
      const srcPath = path.join(src, item.name);
      const destPath = path.join(dest, item.name);

      if (item.isDirectory()) {
        // 递归复制子目录
        copyDirectory(srcPath, destPath);
      } else {
        // 复制文件
        copyFile(srcPath, destPath);
      }
    }

    return true;
  } catch (error) {
    console.error(`复制目录失败: ${src} -> ${dest}`, error.message);
    return false;
  }
}

/**
 * 将组件名转换为 antd 格式（转小写并用连字符连接）
 * 例如：InputNumber -> input-number, DatePicker -> date-picker
 */
function toAntdComponentName(componentName) {
  // 处理特殊组件名映射
  const specialMappings = {
    AlertDialog: 'alert', // AlertDialog 对应 alert
    IconButton: 'button', // IconButton 对应 button
    InputNumber: 'input-number',
    DatePicker: 'date-picker',
    TimePicker: 'time-picker',
    RadioButton: 'radio', // RadioButton 对应 radio
    FloatButton: 'float-button',
    CollapsePanel: 'collapse', // CollapsePanel 对应 collapse
    InputSearch: 'input', // InputSearch 对应 input
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
 * 主函数
 */
function main() {
  console.log('开始复制 Antd 组件文档到 src/antd/docs...\n');

  // 检查必要的目录是否存在
  if (!fs.existsSync(COMMON_COMPONENTS_DIR)) {
    console.error(
      `错误: commonComponents 目录不存在: ${COMMON_COMPONENTS_DIR}`,
    );
    process.exit(1);
  }

  if (!fs.existsSync(ANTD_COMPONENTS_DIR)) {
    console.error(`错误: ant-design 目录不存在: ${ANTD_COMPONENTS_DIR}`);
    process.exit(1);
  }

  // 确保 src/antd/docs 目录存在
  ensureDirectory(DOCS_ANTD_DIR);

  // 获取所有组件目录
  const componentDirs = getDirectories(COMMON_COMPONENTS_DIR);
  console.log(
    `发现 ${componentDirs.length} 个组件: ${componentDirs.join(', ')}\n`,
  );

  let successCount = 0;
  let skipCount = 0;
  let errorCount = 0;

  componentDirs.forEach((componentName) => {
    // 转换为 antd 组件名格式
    const antdComponentName = toAntdComponentName(componentName);

    // 构建路径
    const antdDocPath = path.join(
      ANTD_COMPONENTS_DIR,
      antdComponentName,
      'index.zh-CN.md',
    );
    const targetDirPath = path.join(DOCS_ANTD_DIR, antdComponentName);
    const targetDocPath = path.join(targetDirPath, 'index.zh-CN.md');

    console.log(`处理组件: ${componentName} -> antd: ${antdComponentName}`);

    // 检查 antd 文档是否存在
    if (!fileExists(antdDocPath)) {
      console.log(`  ⚠️  跳过: Antd 文档不存在 ${antdDocPath}`);
      skipCount++;
      return;
    }

    // 创建目标目录
    ensureDirectory(targetDirPath);

    // 复制主文档
    if (copyFile(antdDocPath, targetDocPath)) {
      console.log(`  ✅ 成功复制: ${antdDocPath} -> ${targetDocPath}`);

      // 检查并复制 shared 目录（如果存在）
      const sharedSrcPath = path.join(
        ANTD_COMPONENTS_DIR,
        antdComponentName,
        'shared',
      );
      const sharedTargetPath = path.join(targetDirPath, 'shared');

      if (fileExists(sharedSrcPath)) {
        if (copyDirectory(sharedSrcPath, sharedTargetPath)) {
          console.log(
            `  📁 成功复制共享目录: ${sharedSrcPath} -> ${sharedTargetPath}`,
          );
        } else {
          console.log(`  ⚠️  复制共享目录失败: ${sharedSrcPath}`);
        }
      }

      successCount++;
    } else {
      console.log(`  ❌ 复制失败: ${componentName}`);
      errorCount++;
    }
  });

  console.log(`\n复制完成!`);
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

module.exports = { main, toAntdComponentName };
