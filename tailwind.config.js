/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: [
    './app/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}'
  ],
  theme: {
    extend: {
      fontFamily: {
        inter: ['Inter', 'sans-serif'],
      },
      colors: {
        primary: '#007BFF',
        accent: '#17A2B8',
        muted: '#F8F9FA',
        'muted-foreground': '#6C757D',
        background: '#FFFFFF',
        foreground: '#212529',
        secondary: '#E9ECEF'
      }
    }
  },
  plugins: []
};
