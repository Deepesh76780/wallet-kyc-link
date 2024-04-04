/** @type {import('next').NextConfig} */
const nextConfig = {
  env: {
    ETHER_API: process.env.ETHER_API,
    POLYGON_API: process.env.POLYGON_API,
    PENATA_API_SECRET: process.env.PENATA_API_SECRET,
    PENATA_API: process.env.PENATA_API,
    TOKEN: process.env.TOKEN,
    NEXT_PUBLIC_PROJECT_ID: process.env.NEXT_PUBLIC_PROJECT_ID,
    SEPOLIA_PRIVATE_KEY: process.env.SEPOLIA_PRIVATE_KEY,
    API_KEY: process.env.API_KEY,
    apiKey: process.env.apiKey,
    authDomain: process.env.authDomain,
    projectId: process.env.projectId,
    storageBucket: process.env.storageBucket,
    messagingSenderId: process.env.messagingSenderId,
    appId: process.env.appId,
  },
};

export default nextConfig;
