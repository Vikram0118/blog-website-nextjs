/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
          {
            protocol: 'https',
            hostname: 'raw.githubusercontent.com',
            port: '',
            pathname: '/Vikram0118/blogposts-mdx/main/images/**',
          },
        ],
    },
}

module.exports = nextConfig
