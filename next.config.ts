import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  agentRules: false,
  async redirects() {
    return [
      {
        source: "/:locale(en|zh)/publications",
        destination: "/:locale/papers",
        permanent: true,
      },
      {
        source: "/:locale(en|zh)/publications/:slug",
        destination: "/:locale/papers/:slug",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
