// tailwind.config.js
module.exports = {
  style: {
    postcss: {
      plugins: [require("tailwindcss"), require("autoprefixer")],
    },
  },
  jit: false,
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx}',
    './src/components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        dod: {
          100: '#8BC3E1',
          300: '#2492C9',
          500: '#127CB1',
          700: '#006699',
          900: '#083DF8',
        },
      },
    },
    plugins: [],
  },
};
