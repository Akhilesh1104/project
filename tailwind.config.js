/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  darkMode: 'class',
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'ui-sans-serif', 'system-ui', 'sans-serif'],
      },
      animation: {
        'fadeIn': 'fadeIn 0.7s ease-in-out forwards',
        'slideDown': 'slideDown 0.5s ease-in-out forwards',
        'slideUp': 'slideUp 0.3s ease-in-out forwards',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: 0, transform: 'translateY(20px)' },
          '100%': { opacity: 1, transform: 'translateY(0)' },
        },
        slideDown: {
          '0%': { transform: 'translateY(-100%)', opacity: 0 },
          '100%': { transform: 'translateY(0)', opacity: 1 },
        },
        slideUp: {
          '0%': { transform: 'translateY(100%)', opacity: 0 },
          '100%': { transform: 'translateY(0)', opacity: 1 },
        },
      },
      colors: {
        light: {
          bg: '#FAFAFA',
          text: '#000000',
          border: '#E5E5E5',
          accent: '#3B82F6',
          muted: '#6B7280',
          surface: '#FFFFFF',
        },
        dark: {
          bg: '#000000',
          text: '#FFFFFF',
          border: '#1A1A1A',
          accent: '#60A5FA',
          muted: '#666666',
          surface: '#0A0A0A',
          'surface-hover': '#141414',
          'surface-elevated': '#1A1A1A',
        },
        'dark-surface': '#000000',
        'dark-surface-elevated': '#2a2a2a',
        'dark-text': '#ffffff',
        'dark-muted': '#a1a1aa',
        'dark-border': '#27272a',
      },
      transitionProperty: {
        'colors': 'background-color, border-color, color, fill, stroke',
      },
      transitionDuration: {
        '400': '400ms',
      },
    },
  },
  plugins: [],
};