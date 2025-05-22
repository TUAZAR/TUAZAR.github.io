/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ['via.placeholder.com', 'images.unsplash.com'],
    unoptimized: true,
  },
  basePath: process.env.NODE_ENV === 'production' ? '/TUAZAR.github.io' : '',
  assetPrefix: process.env.NODE_ENV === 'production' ? '/TUAZAR.github.io/' : '',
  trailingSlash: true,
}

module.exports = nextConfig 