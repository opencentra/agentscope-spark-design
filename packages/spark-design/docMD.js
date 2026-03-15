const fs = require('fs');
const path = require('path');

// 源目录路径
const sourceDir = 'src/components/commonComponents';
// 目标目录路径
const targetDir = './dist/md';

// 确保目标目录存在
if (!fs.existsSync(targetDir)) {
  fs.mkdirSync(targetDir, { recursive: true });
}

// 存储成功复制的文件名列表
const copiedFiles = [];

// 读取 commonComponents 目录下的所有文件夹
fs.readdir(sourceDir, { withFileTypes: true }, (err, entries) => {
  if (err) {
    console.error('读取源目录失败:', err);
    return;
  }

  // 过滤出文件夹
  const directories = entries.filter(entry => entry.isDirectory());
  
  if (directories.length === 0) {
    return;
  }

  directories.forEach(dir => {
    const componentName = dir.name;
    const sourcePath = path.join(sourceDir, componentName, 'index.md');
    const targetPath = path.join(targetDir, `${componentName}.md`);

    // 检查源文件是否存在
    if (fs.existsSync(sourcePath)) {
      try {
        // 复制文件
        fs.copyFileSync(sourcePath, targetPath);
        // 添加到成功复制的文件列表中
        copiedFiles.push(`${componentName}.md`);
      } catch (error) {
        console.error(`❌ 复制失败 ${componentName}:`, error.message);
      }
    } else {
      console.log(`⚠️  跳过 ${componentName}: 未找到 index.md 文件`);
    }
  });

  // 生成 list.json 文件
  const listData = {
    list: copiedFiles
  };

  const listJsonPath = path.join(targetDir, 'list.json');
  try {
    fs.writeFileSync(listJsonPath, JSON.stringify(listData, null, 2));
    console.log(`✅ 已生成文件列表: list.json (${copiedFiles.length} 个文件)`);
  } catch (error) {
    console.error('❌ 生成 list.json 失败:', error.message);
  }

  console.log('\ndoc md 复制完成！');
});
