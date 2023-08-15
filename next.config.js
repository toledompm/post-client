/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: [
      "source.unsplash.com",
      "objectstorage.sa-saopaulo-1.oraclecloud.com",
    ],
    loader: 'custom',
    loaderFile: './_next/image-loader.js',
  },
};

module.exports = nextConfig;
