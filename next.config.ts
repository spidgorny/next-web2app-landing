/** @type {import('next').NextConfig} */
const nextConfig = {
  devIndicators: {
    appIsrStatus: true, // defaults to true
    buildActivity: true, // defaults to true
  },
  transpilePackages: ["spidgorny-react-helpers"],
  // i18n: {
  //   locales: ['en', 'de'],
  //   defaultLocale: 'en'
  // }
};

export default nextConfig;
