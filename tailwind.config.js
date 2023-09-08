/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        inter: ['Inter', 'sans'], // 'Inter' is the font name
      },
      colors: {
        'primary-color': '#00A693',
        'secondary-color': '#0067A5',
        'dark-gray': '#565656',
      },
      backgroundImage: {
        'footer-gradient':
          'linear-gradient(180deg, rgba(0, 166, 147, 0) 0%, rgba(0, 166, 147, 0.3) 22.4%, #00A693 99.96%, #00A693 99.97%)',
      },
    },
  },
  plugins: [],
};
