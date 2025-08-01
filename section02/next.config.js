/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ["shopping-phinf.pstatic.net"], // 외부 이미지 도메인 등록
  },
};

module.exports = nextConfig; // ✅ CommonJS 문법
