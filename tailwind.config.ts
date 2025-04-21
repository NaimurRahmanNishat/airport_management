import plugin from "tailwindcss/plugin";
import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        white: "#ffffff",
        black: "#000000",
        indigo: "#6610f2",
        pink: "#d63384",
        teal: "#20c997",
        primary: "#0d0437",
        secondary: "#29eaad",
        rgbOrange:  "#FF6900",
        rgbGreen: "#36af54",
      },
      fontFamily: {
        primary: ["Poppins", "sans-serif"],
        secondary: ["Oswald", "serif"], 
      },
    },
  },
  plugins: [
    plugin(function ({ addUtilities }) {
      addUtilities({
        ".text-gradient": {
          background: "linear-gradient(to right, #a855f7, #3b82f6)",
          "-webkit-background-clip": "text",
          "-webkit-text-fill-color": "transparent",
        },
      });
    }),
  ],
};

export default config;
