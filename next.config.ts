import { NextConfig } from "next";

const nextConfig = {
  transpilePackages: ["spidgorny-react-helpers"],
  // i18n: {
  //   locales: ['en', 'de'],
  //   defaultLocale: 'en'
  // }
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "media.gettyimages.com",
        pathname: "/**", // Allows all image paths under this domain
      },
      {
        protocol: "https",
        hostname: "cdni.iconscout.com",
        pathname: "/**", // Allows all image paths under this domain
      },
    ],
  },
} as NextConfig;

export default nextConfig;
