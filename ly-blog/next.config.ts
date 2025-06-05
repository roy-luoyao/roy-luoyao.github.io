import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
    output: 'export',
  // 如果你的项目不是部署在根目录，需加 basePath
  // basePath: '/ly-blog',
  // 如果你用 app router，建议加 trailingSlash
  trailingSlash: true,
};
export default nextConfig;
