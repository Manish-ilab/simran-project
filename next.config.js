/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: [], // Add remote domains here if needed
  },
  productionBrowserSourceMaps: false,
  experimental: {
    webpackBuildWorker: true,
    parallelServerBuildTraces: true,
    parallelServerCompiles: true,
  },
};

module.exports = nextConfig;
