/** @type {import('next').NextConfig} */
const nextConfig = {
  // webpack: (config) => {
  //   config.module.rules.push({
  //     test: /\.(mp4|webm)$/,
  //     use: {
  //       loader: 'file-loader',
  //       options: {
  //         publicPath: '/_next',
  //         name: 'static/media/[name].[hash].[ext]'
  //       }
  //     }
  //   });

  //   return config;
  // },
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
  }
};

module.exports = nextConfig;
