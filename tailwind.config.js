/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        page: '#DEE5F7',
        panel: '#FDFDFF',
        peri: {
          DEFAULT: '#8496DC',
          deep: '#6F81C9',
          soft: '#AEBBEA',
          pale: '#EFF2FC',
          text: '#6D78AC',
        },
      },
      fontFamily: {
        round: ['"Quicksand"', 'system-ui', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
