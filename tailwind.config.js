/** @type {import('tailwindcss').Config} */
const defaultTheme = require("tailwindcss/defaultTheme")

module.exports = {
  content: [],
  theme: {
    fontFamily: {
      sans: ["Poppins", ...defaultTheme.fontFamily.sans]
    },
    extend: {
      backgroundImage: {
        'netflix-fundo': "url('./assets/img/bg-login.jpg')",
      }
    }
  },
  plugins: []
}