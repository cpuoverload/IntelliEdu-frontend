#!/bin/zsh

# 设置源代码目录,默认为 src
SOURCE_DIR=${1:-"src"}

# 查找所有 js/jsx/ts/tsx 文件并生成测试
find $SOURCE_DIR -type f \( -name "*.js" -o -name "*.jsx" -o -name "*.ts" -o -name "*.tsx" \) \
  ! -path "*/node_modules/*" \
  ! -path "*/dist/*" \
  ! -path "*/build/*" \
  ! -name "*.test.*" \
  ! -name "*.spec.*" \
  ! -name "*.d.ts" \
  | while read file; do
    dir=$(dirname "$file")
    filename=$(basename "$file")
    base_name="${filename%.*}"
    test_file="$dir/${base_name}.test.js"

    if [[ ! -f "$test_file" ]]; then
      echo "Generating test for: $file"
      jest-test-gen "$file" --output "$test_file"
    else
      echo "Test already exists for: $file"
    fi
  done
