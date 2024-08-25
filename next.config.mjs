/** @type {import('next').NextConfig} */
const nextConfig = {
    // reactStrictMode: true,
    images: {
        remotePatterns: [
            {
                protocol: 'https',
                hostname: 'via.placeholder.com',
            },
            {
                protocol: 'https',
                hostname: 'www.git-scm.com',
            },
            {
                protocol: 'https',
                hostname: 'plus.unsplash.com',
            }
        ]
    },
    // async headers() {
    //     return [
    //     {
    //         source: '/(.*)',
    //         headers: securityHeaders,
    //     },
    //     ];
    // },
    // async rewrites(){
    //     return [
    //         {
    //             source: '/api/:path*',
    //             destination: 'http://localhost:3000/api/:path*',
    //         },
    //     ]
    // }
};

export default nextConfig;
