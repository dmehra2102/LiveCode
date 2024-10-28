/** @type {import('next').NextConfig} */
const nextConfig = {
    images : {
        remotePatterns : [
            { protocol : "https", hostname : "code.visualstudio.com", port : '',pathname: '/assets/**'}
        ]
    }
};

export default nextConfig;
