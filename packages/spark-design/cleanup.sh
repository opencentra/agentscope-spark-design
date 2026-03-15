#!/bin/bash

# 删除dist目录下的所有demo.tsx文件
find dist -type f -name "demo.js" -exec rm -f {} \;
find dist -type f -name "demo.d.ts" -exec rm -f {} \;

# 删除dist目录下所有名为demo的文件夹及其内容
find dist -type d -name "demo" -exec rm -rf {} \;

echo "删除完成"