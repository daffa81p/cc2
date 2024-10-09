/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
            {
                protocol: 'https', 
                hostname: 's7d2.scene7.com', 
                pathname: '**'
            },
            {
                protocol: 'https', 
                hostname: 'randomuser.me', 
                pathname: '**'
            },
            {
                protocol: 'https', 
                hostname: 'hubspot.com', 
                pathname: '**'
            },
        ]
    }
};

export default nextConfig;
