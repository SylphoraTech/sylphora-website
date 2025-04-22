// tailwind.config.js

module.exports = {
  content: [
    "./src/**/*.{html,js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        lampStart: "#D1D5DB",  // Lighter shade
        lampEnd: "#6B7280",    // Darker shade
      },
    },
  },
  darkMode: 'class', // Enable dark mode via class toggle
  plugins: [],
};
