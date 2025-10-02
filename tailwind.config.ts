import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        'circo-red': '#C8102E',
        'circo-dark-red': '#8B0000',
        'circo-gold': '#FFD700',
      },
      transitionDuration: {
        '2000': '2000ms',
        '3000': '3000ms',
      },
      animation: {
        'pulse-slow': 'pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite',
      },
      zIndex: {
        '9999': '9999',
      }
    },
  },
  plugins: [],
};

export default config;