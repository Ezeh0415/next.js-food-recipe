/** @type {import('next').NextConfig} */
const nextConfig = {
   // next.config.js
    images: {
      remotePatterns: [
        {
          protocol: 'http',
          hostname: 'forkify-api.herokuapp.com',
          port: '',
          pathname: '/images/**',
        },
      ],
    },
};

export default nextConfig;
