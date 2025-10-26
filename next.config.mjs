/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  basePath: '/Projects', // if repo is not a user/org site
  images: {
    unoptimized: true,
  },
};

module.exports = nextConfig;
