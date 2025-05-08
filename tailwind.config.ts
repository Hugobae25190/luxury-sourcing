import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#0a0a0a',
        accent: '#d4af37'
      }
    }
  },
  plugins: [],
}

export default config