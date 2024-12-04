/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: false,
  images: {
    unoptimized: true,
    domains: ['media.licdn.com']
  }
};

module.exports = nextConfig;