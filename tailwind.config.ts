/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      // IMPROVEMENT: New, sophisticated color palette
      colors: {
        background: '#0a0a0a',
        foreground: '#fafafa',
        'gold': {
          DEFAULT: '#c09a69', // Main gold color
          dark: '#a17e53',   // Darker shade for gradients/hovers
          light: '#e1c19b',  // Lighter shade for highlights
        },
        // Using neutral colors for text for a cleaner look
        neutral: {
          200: '#e5e5e5',
          300: '#d4d4d4',
        },
      },
      fontFamily: {
        display: ["'Gilda Display'", "serif"],
        body: ["'Inter'", "sans-serif"],
      },
      // IMPROVEMENT: Using drop-shadow for better text legibility
      dropShadow: {
        sm: '0 1px 2px rgba(0, 0, 0, 0.3)',
        lg: '0 4px 6px rgba(0, 0, 0, 0.4)',
      },
      keyframes: {
        // Renamed for consistency
        'fade-in-up': {
          from: { opacity: "0", transform: "translateY(20px)" },
          to: { opacity: "1", transform: "translateY(0)" },
        },
        'fade-in-left': {
          from: { opacity: "0", transform: "translateX(-20px)" },
          to: { opacity: "1", transform: "translateX(0)" },
        },
        'fade-in-right': {
          from: { opacity: "0", transform: "translateX(20px)" },
          to: { opacity: "1", transform: "translateX(0)" },
        },
        'fade-in-center': {
          from: { opacity: "0", transform: "translateY(20px) scale(0.98)" },
          to: { opacity: "1", transform: "translateY(0) scale(1)" },
        },
      },
      animation: {
        // Renamed for consistency
        "fade-up": "fade-in-up 1s ease-out forwards",
        "fade-left": "fade-in-left 1s ease-out forwards",
        "fade-right": "fade-in-right 1s ease-out forwards",
        "fade-center": "fade-in-center 1.2s ease-out forwards",
      },
    },
  },
  plugins: [],
};