/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ['localhost'],
  },
  output: 'export',
  distDir: 'dist',
  trailingSlash: true,
};

module.exports = nextConfig;