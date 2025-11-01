/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: {
          light: '#bfdbfe',
          DEFAULT: '#3b82f6',
          dark: '#1d4ed8',
        },
        slate: {
          900: '#0f172a',
        },
      },
      fontFamily: {
        sans: ['"Inter"', '"Roboto"', '"Open Sans"', 'system-ui', 'sans-serif'],
      },
      boxShadow: {
        subtle: '0 10px 30px rgba(15, 23, 42, 0.08)',
      },
    },
  },
  plugins: [],
};

