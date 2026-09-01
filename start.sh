#!/usr/bin/env bash
# WMS Landing 启动脚本
# 在项目根目录执行: ./start.sh

set -e

SCRIPT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"
cd "$SCRIPT_DIR"

DOMAIN="www.hetou.vip"
SSL_DIR="./ssl"

echo "==> [1/3] 检查证书文件..."
mkdir -p "$SSL_DIR"

# 优先 www.hetou.vip 专用证书 → fallback 通配符 *.hetou.vip → fallback wms / luyin 旧证书
if [ -f "$SSL_DIR/${DOMAIN}.pem" ] && [ -f "$SSL_DIR/${DOMAIN}.key" ]; then
  echo "    ✅ ${DOMAIN} 证书已就绪"
elif [ -f "./${DOMAIN}.pem" ] && [ -f "./${DOMAIN}.key" ]; then
  echo "    ✅ 使用根目录下 ${DOMAIN} 证书"
  cp -f ./${DOMAIN}.pem "$SSL_DIR/${DOMAIN}.pem"
  cp -f ./${DOMAIN}.key "$SSL_DIR/${DOMAIN}.key"
elif [ -f "./www.hetou.vip.pem" ] && [ -f "./www.hetou.vip.key" ]; then
  echo "    ✅ 使用根目录 www.hetou.vip 通配符证书"
  cp -f ./www.hetou.vip.pem "$SSL_DIR/${DOMAIN}.pem"
  cp -f ./www.hetou.vip.key "$SSL_DIR/${DOMAIN}.key"
elif [ -f "./ssl/wms.hetou.vip.pem" ] && [ -f "./ssl/wms.hetou.vip.key" ]; then
  echo "    ⚠️  使用 wms.hetou.vip 证书"
  cp -f ./ssl/wms.hetou.vip.pem "$SSL_DIR/${DOMAIN}.pem"
  cp -f ./ssl/wms.hetou.vip.key "$SSL_DIR/${DOMAIN}.key"
else
  echo "    ❌ 找不到 SSL 证书！需要:"
  echo "       $SSL_DIR/${DOMAIN}.pem"
  echo "       $SSL_DIR/${DOMAIN}.key"
  exit 1
fi

echo "==> [2/3] 拉取镜像 & 启动容器..."
docker compose pull
docker compose up -d

echo "==> [3/3] 等待服务就绪..."
sleep 5
echo ""
echo "✅  启动完成！"
echo "    HTTP:  http://${DOMAIN}  → 301 → HTTPS"
echo "    HTTPS: https://${DOMAIN}"
echo ""
echo "常用命令:"
echo "  ./stop.sh              停止服务"
echo "  docker compose logs -f 查看日志"
echo "  docker compose ps      查看状态"
