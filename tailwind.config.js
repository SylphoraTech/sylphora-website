/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,jsx,ts,tsx}"],
  darkMode: "class", // Still needed to use `dark:` utilities
  theme: {
    extend: {
      animation: {
        shimmer: 'shimmer 2s infinite linear',
      },
      keyframes: {
        shimmer: {
          '100%': { transform: 'translateX(100%)' },
        },
      },
      boxShadow: {
        glow: '0 0 10px 2px rgba(255, 255, 255, 0.15)',
      },
      colors: {
        lampStart: "#D1D5DB",
        lampEnd: "#6B7280",
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
      },
      fontFamily: {
        jakarta: ['"Plus Jakarta Sans"', 'sans-serif'],
      },
    },
  },
  plugins: [
  function ({ addUtilities }) {
    addUtilities({
      '.transform-style-3d': {
        transformStyle: 'preserve-3d',
      },
      '.backface-hidden': {
        backfaceVisibility: 'hidden',
      },
      '.rotate-y-180': {
        transform: 'rotateY(180deg)',
      },
      '.perspective-[1000px]': {
        perspective: '1000px',
      },
    });
  },
],
};