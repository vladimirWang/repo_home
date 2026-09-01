# Stage 1 — Builder
FROM node:22-alpine AS builder

WORKDIR /app

# ====== 国内服务器加速：淘宝镜像源 ======
RUN echo "registry=https://registry.npmmirror.com" > /etc/npmrc && \
    npm config set registry https://registry.npmmirror.com --location=global

# 仅先拷贝依赖定义，利用 Docker layer cache
COPY wms-landing/package.json wms-landing/pnpm-lock.yaml wms-landing/pnpm-workspace.yaml* wms-landing/.npmrc* ./

RUN corepack enable && pnpm config set registry https://registry.npmmirror.com && \
    pnpm install --frozen-lockfile 2>/dev/null || pnpm install

# 再拷贝源码
COPY wms-landing/ ./

# Next.js standalone + 拷贝静态资源
RUN mkdir -p public && \
    pnpm build && \
    cp -r .next/static .next/standalone/.next/static && \
    cp -r public .next/standalone/public

# Stage 2 — Runner (minimal)
FROM node:22-alpine AS runner

WORKDIR /app

ENV NODE_ENV=production \
    PORT=3000 \
    HOSTNAME=0.0.0.0

# 非 root 用户
RUN addgroup -g 1001 -S nodejs && \
    adduser -S nextjs -u 1001

# 拷贝 standalone 产物
COPY --from=builder --chown=nextjs:nodejs /app/.next/standalone ./
COPY --from=builder --chown=nextjs:nodejs /app/.next/static ./.next/static
COPY --from=builder --chown=nextjs:nodejs /app/public/ ./public/

USER nextjs

EXPOSE 3000

CMD ["node", "server.js"]
