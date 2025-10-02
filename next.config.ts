import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Configuración para Tailwind 4
  experimental: {
    turbo: {
      rules: {
        '*.css': {
          loaders: ['@tailwindcss/postcss'],
        },
      },
    },
  },
};

export default nextConfig;