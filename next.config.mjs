/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  basePath: "",
  async redirects() {
    return [
      {
        source: "/",
        destination: "/financial-services",
        permanent: true, // 永久重定向
      },
    ];
  },
};

export default nextConfig;
