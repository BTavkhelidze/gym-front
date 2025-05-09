import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  /* config options here */
  images: {
    domains: [
      'unsplash.com',
      'static.nike.com',
      'images.unsplash.com',
      'encrypted-tbn0.gstatic.com',
      'upload.wikimedia.org',
    ],
  },
  async redirects() {
    return [
      {
        source: '/',
        destination: '/dashboard/home',
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
