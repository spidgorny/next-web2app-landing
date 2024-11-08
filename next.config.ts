/** @type {import('next').NextConfig} */
const nextConfig = {
  devIndicators: {
    appIsrStatus: true, // defaults to true
    buildActivity: true, // defaults to true
  },
  transpilePackages: ["spidgorny-react-helpers"],
};

export default nextConfig;
