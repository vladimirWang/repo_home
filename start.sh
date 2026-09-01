#!/usr/bin/env bash
# WMS Landing 启动脚本
# 在项目根目录执行: ./start.sh

set -e

SCRIPT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"
cd "$SCRIPT_DIR"

echo "==> [1/3] 检查证书文件..."
SSL_DIR="./ssl"
mkdir -p "$SSL_DIR"
# 优先用 luyin 专用证书，fallback 到 www.hetou.vip 通配符证书
if [ -f "$SSL_DIR/luyin.hetou.vip.pem" ] && [ -f "$SSL_DIR/luyin.hetou.vip.key" ]; then
  echo "    ✅ luyin.hetou.vip 证书已就绪"
elif [ -f "./www.hetou.vip.pem" ] && [ -f "./www.hetou.vip.key" ]; then
  echo "    ⚠️  使用 www.hetou.vip 通配符证书（需确认覆盖 luyin.hetou.vip）"
  cp -f ./www.hetou.vip.pem "$SSL_DIR/luyin.hetou.vip.pem"
  cp -f ./www.hetou.vip.key "$SSL_DIR/luyin.hetou.vip.key"
else
  echo "    ❌ 找不到 SSL 证书！需要:"
  echo "       $SSL_DIR/luyin.hetou.vip.pem"
  echo "       $SSL_DIR/luyin.hetou.vip.key"
  exit 1
fi

echo "==> [2/3] 构建 & 启动容器..."
docker compose up -d --build

echo "==> [3/3] 等待服务就绪..."
sleep 5
echo ""
echo "✅  启动完成！"
echo "    HTTPS: https://luyin.hetou.vip"
echo ""
echo "常用命令:"
echo "  ./stop.sh              停止服务"
echo "  docker compose logs -f 查看日志"
echo "  docker compose ps      查看状态"
