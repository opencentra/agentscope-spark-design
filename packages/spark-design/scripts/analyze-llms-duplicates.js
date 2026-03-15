#!/usr/bin/env node

const fs = require('fs');
const path = require('path');

/**
 * 分析 llms 目录下的组件文件，找出 Spark API 和 antd API 之间的重复字段
 */

const LLMS_COMPONENTS_DIR = '../llms/components/commonComponents';

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
 * 从表格中提取属性名
 * 支持两种格式：
 * 1. | 属性名 | 描述 | 类型 | 默认值 |
 * 2. | <div><span class="lang-en">Attribute</span><span class="lang-cn">属性名</span></div> | ...
 */
function extractPropsFromTable(content, sectionTitle) {
  const lines = content.split('\n');
  const props = [];
  let inTargetSection = false;
  let inTable = false;

  for (let i = 0; i < lines.length; i++) {
    const line = lines[i].trim();

    // 检测目标章节开始
    if (line === sectionTitle) {
      inTargetSection = true;
      continue;
    }

    // 如果不在目标章节中，跳过
    if (!inTargetSection) {
      continue;
    }

    // 检测下一个章节开始，停止处理
    if (line.startsWith('#') && line !== sectionTitle) {
      break;
    }

    // 检测表格开始
    if (
      line.includes('|') &&
      (line.includes('属性') ||
        line.includes('参数') ||
        line.includes('Attribute') ||
        line.includes('-----'))
    ) {
      inTable = true;
      continue;
    }

    // 如果在表格中且是数据行
    if (inTable && line.startsWith('|') && !line.includes('-----')) {
      // 如果是空行或者不是属性行，跳出表格
      if (!line.trim() || line.trim() === '|') {
        inTable = false;
        continue;
      }

      // 提取属性名
      const columns = line
        .split('|')
        .map((col) => col.trim())
        .filter((col) => col);
      if (columns.length > 0) {
        let propName = columns[0];

        // 处理复杂格式的属性名
        if (propName.includes('<div>')) {
          // 提取 <span class="lang-cn">属性名</span> 中的内容
          const cnMatch = propName.match(
            /<span class="lang-cn">([^<]+)<\/span>/,
          );
          if (cnMatch) {
            propName = cnMatch[1];
          } else {
            // 如果没有中文，尝试提取英文
            const enMatch = propName.match(
              /<span class="lang-en">([^<]+)<\/span>/,
            );
            if (enMatch) {
              propName = enMatch[1];
            }
          }
        }

        // 清理属性名
        propName = propName.trim();
        if (
          propName &&
          propName !== '属性' &&
          propName !== '参数' &&
          propName !== 'Attribute'
        ) {
          props.push(propName);
        }
      }
    }

    // 检测表格结束
    if (inTable && (!line.trim() || !line.startsWith('|'))) {
      inTable = false;
    }
  }

  return props;
}

/**
 * 分析单个组件文件
 */
function analyzeComponent(componentName) {
  const filePath = path.join(
    LLMS_COMPONENTS_DIR,
    componentName,
    'index.zh-CN.llms.txt',
  );

  if (!fs.existsSync(filePath)) {
    return {
      componentName,
      hasFile: false,
      sparkProps: [],
      antdProps: [],
      duplicates: [],
    };
  }

  const content = readFile(filePath);
  if (!content) {
    return {
      componentName,
      hasFile: true,
      sparkProps: [],
      antdProps: [],
      duplicates: [],
    };
  }

  // 提取 Spark API 属性 (#### API 章节)
  const sparkProps = extractPropsFromTable(content, '#### API');

  // 提取 antd API 属性 (## antd API 章节)
  const antdProps = extractPropsFromTable(content, '## antd API');

  // 找出重复的属性
  const duplicates = sparkProps.filter((prop) => antdProps.includes(prop));

  return {
    componentName,
    hasFile: true,
    sparkProps,
    antdProps,
    duplicates,
  };
}

/**
 * 主函数
 */
function main() {
  console.log('开始分析 llms 目录下的组件文件...\n');

  if (!fs.existsSync(LLMS_COMPONENTS_DIR)) {
    console.error(`错误: llms 组件目录不存在: ${LLMS_COMPONENTS_DIR}`);
    process.exit(1);
  }

  const componentDirs = getDirectories(LLMS_COMPONENTS_DIR);
  console.log(`发现 ${componentDirs.length} 个组件目录\n`);

  const results = [];
  let totalDuplicates = 0;

  componentDirs.forEach((componentName) => {
    const result = analyzeComponent(componentName);
    results.push(result);

    if (!result.hasFile) {
      console.log(`⚠️  ${componentName}: 没有 llms 文件`);
      return;
    }

    if (result.duplicates.length > 0) {
      console.log(
        `❌ ${componentName}: 发现 ${result.duplicates.length} 个重复属性`,
      );
      console.log(`   Spark API: [${result.sparkProps.join(', ')}]`);
      console.log(`   antd API: [${result.antdProps.join(', ')}]`);
      console.log(`   重复字段: [${result.duplicates.join(', ')}]`);
      totalDuplicates += result.duplicates.length;
    } else if (result.sparkProps.length > 0 || result.antdProps.length > 0) {
      console.log(`✅ ${componentName}: 无重复字段`);
      if (result.sparkProps.length > 0) {
        console.log(`   Spark API: [${result.sparkProps.join(', ')}]`);
      }
      if (result.antdProps.length > 0) {
        console.log(`   antd API 字段数: ${result.antdProps.length}`);
      }
    } else {
      console.log(`ℹ️  ${componentName}: 没有找到 API 表格`);
    }
  });

  console.log(`\n分析完成!`);
  console.log(`总共发现 ${totalDuplicates} 个重复字段`);

  const componentsWithDuplicates = results.filter(
    (r) => r.duplicates.length > 0,
  );
  if (componentsWithDuplicates.length > 0) {
    console.log(`\n需要修复的组件 (${componentsWithDuplicates.length} 个):`);
    componentsWithDuplicates.forEach((result) => {
      console.log(`- ${result.componentName}: ${result.duplicates.join(', ')}`);
    });
  }

  return results;
}

// 运行脚本
if (require.main === module) {
  main();
}

module.exports = { main, analyzeComponent, extractPropsFromTable };
