/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        teal: {
          50: '#f0f7f6',
          100: '#daece9',
          200: '#b8dad4',
          300: '#8ec1b8',
          400: '#5fa197',
          500: '#40857b',
          600: '#2f6a62',
          700: '#27554f',
          800: '#224641',
          900: '#153f3a',
          950: '#0d2522',
          brand: '#0f3d43',
          surface: '#155762',
          dark: '#0a292d',
        },
        gold: {
          50: '#fbf8ee',
          100: '#f5efd6',
          200: '#ebdca9',
          300: '#dfc476',
          400: '#d1ab49',
          500: '#b88e38',
          600: '#9e732c',
          700: '#7d5526',
          800: '#684524',
          900: '#573a22',
        },
        cream: {
          50: '#fdfdfb',
          100: '#fafaf7',
          200: '#f3f4ee',
          300: '#e7e8de',
        },
        sage: {
          50: '#f5f7f5',
          100: '#e9eee8',
          200: '#d4dfd2',
          300: '#b5c7b3',
        },
      },
      fontFamily: {
        sans: ['Plus Jakarta Sans', 'DM Sans', '-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'Roboto', 'sans-serif'],
        display: ['Plus Jakarta Sans', '-apple-system', 'BlinkMacSystemFont', 'sans-serif'],
        serif: ['Playfair Display', 'Georgia', 'serif'],
        marathi: ['Noto Sans Devanagari', 'Plus Jakarta Sans', 'sans-serif'],
      },
      boxShadow: {
        'soft': '0 4px 20px -2px rgba(15, 61, 67, 0.06), 0 2px 6px -1px rgba(15, 61, 67, 0.04)',
        'medium': '0 12px 32px -4px rgba(15, 61, 67, 0.1), 0 4px 12px -2px rgba(15, 61, 67, 0.05)',
        'premium': '0 24px 60px -12px rgba(15, 61, 67, 0.16), 0 8px 24px -6px rgba(15, 61, 67, 0.08)',
        'gold-glow': '0 8px 25px -4px rgba(184, 142, 56, 0.35)',
      },
      keyframes: {
        'fade-in': { from: { opacity: '0' }, to: { opacity: '1' } },
        'slide-up': { from: { opacity: '0', transform: 'translateY(18px)' }, to: { opacity: '1', transform: 'translateY(0)' } },
        'pulse-subtle': { '0%, 100%': { transform: 'scale(1)', opacity: '1' }, '50%': { transform: 'scale(1.04)', opacity: '0.9' } },
      },
      animation: {
        'fade-in': 'fade-in 0.4s ease-out forwards',
        'slide-up': 'slide-up 0.5s cubic-bezier(0.16, 1, 0.3, 1) forwards',
        'pulse-subtle': 'pulse-subtle 3s ease-in-out infinite',
      },
    },
  },
  plugins: [],
};
