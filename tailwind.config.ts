import type { Config } from 'tailwindcss';

const config: Config = {
  content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
        colors: {
          night: '#0f172a',       // Bleu nuit
          anthracite: '#1e293b',  // Bleu anthracite
          accent: '#d4af37',      // Or
        },
      },
  },
  plugins: [],
};

export default config;