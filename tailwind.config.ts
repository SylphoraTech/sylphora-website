import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/**/*.{html,js,jsx,ts,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        lampStart: "#D1D5DB", // Lighter shade
        lampEnd: "#6B7280",   // Darker shade
      },
      animation: {
        move: "move 5s linear infinite",
      },
      keyframes: {
        move: {
          "0%": { transform: "translateX(-200px)" },
          "100%": { transform: "translateX(200px)" },
        },
      },
    },
  },
  darkMode: "class", // Enable dark mode via class toggle
  plugins: [],
};

export default config;
