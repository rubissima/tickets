/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {},
    screens: {
      'tablet': '850px',
      'desktop': '1200px'
    }
  },
  plugins: [require("daisyui")],
  daisyui: {
    themes: ["lofi"],
  }
}
