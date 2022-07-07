/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'sans': ['"Merriweather Sans"'],
        'serif': ['Merriweather'],
      },
      colors: {
        "tegami-900": "#2B2400",
        "tegami-800": "#463B00",
        "tegami-500": "#BF8E44",
        "tegami-200": "#F6F6E3",
        "tegami-100": "#FEFCF4",
        "tegami-border": "#DDD1BF",
        "tegami-gray": "#898A9F",

      }
    },
  },
  plugins: [],
}
