module.exports = {
  reactStrictMode: true,
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'example.com', // Replace with your image host
        port: '',
        pathname: '/**',
      },
    ],
  },
};