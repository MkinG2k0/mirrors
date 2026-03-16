import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "**",
      },
    ],
    // или, если remotePatterns не хочется использовать:
    // domains: ['avatars.mds.yandex.net', 'lh3.googleusercontent.com', '...']
  },
};

export default nextConfig;
