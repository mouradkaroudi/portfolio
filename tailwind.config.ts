import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: ['selector'],
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/**/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
      fontFamily: {
        inter: ['var(--font-inter)', 'sans-serif'],
      },
      aspectRatio: {
        '3/2': '3 / 2',
      },
      keyframes: {
        signature: {
          '0%': { strokeDashoffset: '836' },
          '100%': { strokeDashoffset: '0' },
        },
      },
      animation: {
        signature: 'signature 3s ease forwards',
      },
    },
  },
  plugins: [],
};
export default config;
