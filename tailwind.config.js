/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Inter", "sans-serif"],
        serif: ["Playfair Display", "serif"],
      },
      backgroundImage: {
        'custom-gradient': 'linear-gradient(93deg, #283606 0%, #0F1500 100%)',
      },
      colors: {
        'custom-light': '#344114',
      },
    },
  },
  plugins: [],
};
