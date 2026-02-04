import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  allowedDevOrigins: [
    "*.worf.replit.dev",
    "*.kirk.replit.dev", 
    "*.pike.replit.dev",
    "*.spock.replit.dev",
    "*.replit.dev",
    "*.repl.co",
    "*.replit.app",
  ],
};

export default nextConfig;
