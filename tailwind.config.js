const plugin = require('tailwindcss/plugin');

module.exports = {
  content: ['./src/**/*.{html,js,jsx,ts,tsx}'], // tus rutas
  darkMode: 'class', // activa modo oscuro basado en clase `.dark`
  plugins: [
    plugin(function ({ addVariant }) {
      addVariant('custom-dark', '&:is(.dark *)'); // este es el equivalente a tu línea
    }),
  ],
};
