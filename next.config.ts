import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async rewrites() {
    return [
      // Route by host: proxy subdomain to external app, URL stays on subdomain
      {
        source: "/:path*",
        has: [{
          type: "host",
          // Production subdomain
          value: "stock-management.markopuzovic.site",
        }],
        destination: "https://stock-management-five-chi.vercel.app/:path*",
      },
      {
        source: "/:path*",
        has: [{
          type: "host",
          // Local testing subdomain (open http://stock-management.localhost:3000)
          value: "stock-management.localhost",
        }],
        destination: "https://stock-management-five-chi.vercel.app/:path*",
      },
      {
        source: "/:path*",
        has: [{
          type: "host",
          // Some environments include the port in the Host header during dev
          value: "stock-management.localhost:3000",
        }],
        destination: "https://stock-management-five-chi.vercel.app/:path*",
      }
    ];
  },
};

export default nextConfig;
