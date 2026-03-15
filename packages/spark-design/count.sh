#!/bin/bash

# 统计docs-dist目录下的文件数量
docs_dist_count=$(find docs-dist -type f | wc -l)

# 统计dist目录下的文件数量
dist_count=$(find dist -type f | wc -l)

# 计算总文件数量
total_count=$((docs_dist_count + dist_count))

# 输出结果
echo "docs-dist目录下有 $docs_dist_count 个文件"
echo "dist目录下有 $dist_count 个文件"
echo "总共有 $total_count 个文件"