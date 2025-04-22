import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx,html}", // This is your original content setup
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",  // Added for pages folder
    "./components/**/*.{js,ts,jsx,tsx,mdx}",  // Added for components folder
    "./app/**/*.{js,ts,jsx,tsx,mdx}",  // Added for app folder
  ],
  theme: {
    extend: {
      animation: {
        move: "move 5s linear infinite", // Added custom animation
      },
      keyframes: {
        move: {
          "0%": { transform: "translateX(-200px)" }, // Custom keyframes for horizontal movement
          "100%": { transform: "translateX(200px)" },
        },
      },
    },
  },
  plugins: [],
};

export default config;
