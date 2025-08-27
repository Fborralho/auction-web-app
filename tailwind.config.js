/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./resources/**/*.blade.php",
    "./resources/**/*.js",
    "./resources/**/*.vue",
  ],
  theme: {
    extend: {
      colors: {
        lightBrown : '#ffdcc2',
        auxBrown : '#97503e',
        textBrown : '#a86553',
        darkBrown : '#391a04',

      }
    },
  },
  plugins: [],
}

