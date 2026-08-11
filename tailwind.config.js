/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        paper: '#f7f3ea',
        'paper-edge': '#e9e2d0',
        ink: '#2b2a28',
        'ink-soft': '#6b665c',
        accent: '#b5542c',
        'bg-dark': '#241c17',
        'bg-warm': '#55483c',
      },
      fontFamily: {
        caveat: ['"Caveat"', 'cursive'],
        sans: ['"Nunito Sans"', 'system-ui', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
