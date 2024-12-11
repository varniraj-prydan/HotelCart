/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        // Custom colors from your palette
        'custom-black': '#333333',
        'custom-white': '#F5F5F5',
        'light-teal': '#E1F4F3',
        'grayish-green': '#706C61',
        'custom-white':'#FAF9F6',
        'scrollbar-thumb': '#9E090F',
        'scrollbar-thumb-hover': '#9E090A',
        'primary-red' : '#9E090F'
      },
      boxShadow: {
        'even': '0 0 5px rgba(0, 0, 0, 0.5)', // Example values
      },
    },
  },
  plugins: [],
}

