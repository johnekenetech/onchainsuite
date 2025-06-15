const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  eslint: {
    ignoreDuringBuilds: true, // Ignore lint errors during production build
  },
  typescript: {
    ignoreBuildErrors: true, // Allow production builds to complete even if there are type errors
  },
};

module.exports = nextConfig;
