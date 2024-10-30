/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
          {
            protocol: 'https',
            hostname: "ik.imagekit.io",
            // port: '',
            // pathname: '/your-account/**',
          },
        ],
      },
};

export default nextConfig;
