/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
}
module.exports = {
  images: {
      loader: 'default',
      unoptimized: true, // Disable Image Optimization for export
  },
};



