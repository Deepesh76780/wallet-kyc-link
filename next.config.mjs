/** @type {import('next').NextConfig} */
const nextConfig = {
    env:{
        ETHER_API: process.env.ETHER_API,
        POLYGON_API: process.env.POLYGON_API
    }
};

export default nextConfig;
