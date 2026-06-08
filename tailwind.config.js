/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        wine: { DEFAULT: '#722F37', light: '#9B4451', dark: '#4A1E23' },
        cream: { DEFAULT: '#F5ECD7', light: '#FAF7F2', dark: '#E8D5B0' },
        gold: { DEFAULT: '#C9A84C', light: '#DFC07A', dark: '#9E7D2E' },
        espresso: { DEFAULT: '#2C1A0E', light: '#3D2515' },
        sage: { DEFAULT: '#7D9B76', light: '#9BB594' },
      },
      fontFamily: {
        heading: ['"Playfair Display"', 'Georgia', 'serif'],
        body: ['Lato', 'sans-serif'],
      },
    },
  },
  plugins: [],
}

