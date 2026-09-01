/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  // Docker 部署优化：生成自包含的 standalone 产物
  output: "standalone",
};

module.exports = nextConfig;
