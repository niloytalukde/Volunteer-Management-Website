/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'hero1': "url('./src/assets/banner1.jpg')",
        'hero2': "url('./src/assets/banner2.jpg')",
        'hero3': "url('./src/assets/banner3.jpg')",
        'hero4': "url('./src/assets/banner1.jpg')",
      }
    },
  },
  plugins: [
    require('daisyui'),
  ],
}
