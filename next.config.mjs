/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  webpack: (config) => {
    config.ignoreWarnings = [
      { module: /three-stdlib/ },
      /LuminanceFormat/,
      /Attempted import error/
    ];
    return config;
  },
};

export default nextConfig;
