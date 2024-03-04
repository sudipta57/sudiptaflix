// next.config.mjs
/** @type {import('next').NextConfig}*/
const nextConfig = {
  experimental: {
    serverComponentsExternalPackages: ["mongoose"],
  },
  images: {
    remotePatterns: [
      {
        hostname: "occ-0-3933-116.1.nflxso.net", // Hostname of the remote image URLs
      },
    ],
  },
};

export default nextConfig;
