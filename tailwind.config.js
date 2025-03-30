/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        brand: {
          blue: '#1A2B4C',
          gold: '#C6A870',
        }
      }
    },
  },
  plugins: [],
};