/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: '**'
      }
    ]
  },
  env: {
    NEXT_YOUTUBE_API_KEY: process.env.NEXT_YOUTUBE_API_KEY,
    NEXT_PUBLIC_BASE_URL: process.env.NEXT_PUBLIC_BASE_URL
  },
  experimental: {
    viewTransition: true
  }
};

module.exports = nextConfig;
