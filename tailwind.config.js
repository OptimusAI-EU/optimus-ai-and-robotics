/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './index.html',
    './src/**/*.{js,ts,jsx,tsx}',
    './**/*.{ts,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: '#d32f2f',
        'primary-dark': '#b71c1c',
        'primary-light': '#f44336',
      },
    },
  },
  plugins: [],
}
