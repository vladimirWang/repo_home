#!/usr/bin/env bash
# WMS Landing 停止脚本
# 在项目根目录执行: ./stop.sh

set -e

SCRIPT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"
cd "$SCRIPT_DIR"

echo "==> 停止 wms-landing 服务..."
docker compose down
echo "✅  已停止"
