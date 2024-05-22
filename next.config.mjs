/** @type {import('next').NextConfig} */
const nextConfig = {
    // reactStrictMode: true,
    images: {
        domains: ['plus.unsplash.com','via.placeholder.com','www.git-scm.com'],
    },
    // async headers() {
    //     return [
    //     {
    //         source: '/(.*)',
    //         headers: securityHeaders,
    //     },
    //     ];
    // },
};

export default nextConfig;
