/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx}',
    './src/components/**/*.{js,ts,jsx,tsx}',
    './src/layouts/**/*.{js,ts,jsx,tsx}'
  ],
  theme: {
    extend: {
      colors: {
        primary: '#0A0A0A',
        secondary: '#171717',
        accent: '#CEFF00',
        'dark-gray': '#1E1E1E',
        'light-gray': '#A1A1AA'
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        mono: ['JetBrains Mono', 'monospace']
      },
      typography: {
        DEFAULT: {
          css: {
            color: '#FFFFFF',
            a: {
              color: '#CEFF00',
              '&:hover': {
                color: '#B0D500',
              },
            },
            h1: {
              color: '#FFFFFF',
            },
            h2: {
              color: '#FFFFFF',
            },
            h3: {
              color: '#FFFFFF',
            },
            blockquote: {
              color: '#A1A1AA',
              borderLeftColor: '#CEFF00',
            },
            code: {
              color: '#CEFF00',
              backgroundColor: '#1E1E1E',
              padding: '0.25rem',
              borderRadius: '0.25rem',
            },
          },
        },
      },
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
  ],
} 