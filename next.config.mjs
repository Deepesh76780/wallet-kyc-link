/** @type {import('next').NextConfig} */
const nextConfig = {
  env: {
    ETHER_API: process.env.ETHER_API,
    POLYGON_API: process.env.POLYGON_API,
    PENATA_API_SECRET: process.env.PENATA_API_SECRET,
    PENATA_API: process.env.PENATA_API,
    TOKEN: process.env.TOKEN,
    NEXT_PUBLIC_PROJECT_ID:process.env.NEXT_PUBLIC_PROJECT_ID
  },
};

export default nextConfig;
