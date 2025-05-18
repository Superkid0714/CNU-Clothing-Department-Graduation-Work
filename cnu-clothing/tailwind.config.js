/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['"Noto Sans KR"', 'sans-serif'],
        display: ['Spectral', 'serif'],
      },
      colors: {
        'primary-blue': {
          900: '#0d4c93', // 가장 진한 색
          800: '#1a5da3',
          700: '#2470c9',
          600: '#3183e4',
          500: '#4899f7',
          400: '#60a5fa',
          300: '#93c5fd',
          200: '#bfdbfe',
          100: '#dbeafe',
          50: '#f0f9ff', // 가장 밝은 색
        },
      },
      animation: {
        'fade-in': 'fadeIn 1.2s ease-out forwards',
        'slide-up': 'slideUp 0.8s ease-out forwards',
        'slide-down': 'slideDown 0.8s ease-out forwards',
        'scale-in': 'scaleIn 0.7s ease-out forwards',
        appear: 'appear 1.5s ease-in-out forwards',
        wave: 'wave 12s ease-in-out infinite alternate',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { transform: 'translateY(20px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
        slideDown: {
          '0%': { transform: 'translateY(-20px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
        scaleIn: {
          '0%': { transform: 'scale(0.95)', opacity: '0' },
          '100%': { transform: 'scale(1)', opacity: '1' },
        },
        appear: {
          '0%': { opacity: '0' },
          '50%': { opacity: '0.5' },
          '100%': { opacity: '1' },
        },
        wave: {
          '0%': { transform: 'translateX(0)' },
          '50%': { transform: 'translateX(-5px)' },
          '100%': { transform: 'translateX(0)' },
        },
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-banner': 'linear-gradient(120deg, #f0f9ff 0%, #e2f1ff 100%)',
        'gradient-overlay':
          'linear-gradient(0deg, rgba(13, 76, 147, 0.05) 0%, rgba(13, 76, 147, 0) 100%)',
        'gradient-footer': 'linear-gradient(180deg, #0d4c93 0%, #0a3b75 100%)',
      },
      boxShadow: {
        'banner-button':
          '0 4px 6px -1px rgba(13, 76, 147, 0.1), 0 2px 4px -1px rgba(13, 76, 147, 0.06)',
        card: '0 10px 15px -3px rgba(0, 0, 0, 0.05), 0 4px 6px -2px rgba(0, 0, 0, 0.05)',
        nav: '0 4px 10px -2px rgba(0, 0, 0, 0.05)',
      },
      transitionProperty: {
        height: 'height',
        spacing: 'margin, padding',
      },
      spacing: {
        72: '18rem',
        84: '21rem',
        96: '24rem',
        128: '32rem',
      },
      opacity: {
        85: '0.85',
        95: '0.95',
      },
      borderWidth: {
        3: '3px',
      },
      zIndex: {
        60: '60',
        70: '70',
      },
      scale: {
        102: '1.02',
        103: '1.03',
      },
    },
  },
  plugins: [],
};
