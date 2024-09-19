/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["*html"],
  theme: {
    //add custom css
    extend: {
      // adding custom colors
      colors: {
        "primary": "#3238f2",
        "secondary": "#FB6340",
      },
      fontFamily:{
        "tushar-fonts" : ['Poppins','sans-serif'],
        "inter-fonts" : ["Inter","sans"]
      }
    },
  },
  plugins: [],
}

