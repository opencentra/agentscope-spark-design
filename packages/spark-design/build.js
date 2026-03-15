const fs = require('fs');
const path = require('path');
const buildArgv = require('yargs-parser')(process.env.BUILD_ARGV_STR || '');
const env = buildArgv['def_publish_env'];
const pkgPath = path.join(process.cwd(), 'package.json');
const version = buildArgv['def_publish_version'];
const semver = require('semver');

const pkgJSON = require(pkgPath);
if (env === 'daily') {
  // 日常环境版本号添加beta标记和时间戳
  pkgJSON.version = semver.coerce(version) + '-beta.' + Date.now();
  console.log('新的npm版本号：', version);
  fs.writeFileSync(pkgPath, JSON.stringify(pkgJSON, null, 2));
} else if (env === 'prod') {
  // 生产环境版判断package.json的版本号和迭代版本号是否一致
  if(pkgJSON.version !== version){
    throw new Error('package.json的版本号和迭代版本号不一致，请检查');
  }
}
