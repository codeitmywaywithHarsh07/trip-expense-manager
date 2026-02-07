/** @type {import('tailwindcss').Config} */
const config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  safelist: [
    'font-jakarta',
    'font-jakarta-light',
    'font-jakarta-regular',
    'font-jakarta-medium',
    'font-jakarta-semibold',
    'font-jakarta-bold',
    'font-jakarta-extrabold',
    'font-jakarta-black',
    'font-jakarta-italic',
    'font-jakarta-light-italic',
    'font-jakarta-regular-italic',
    'font-jakarta-medium-italic',
    'font-jakarta-semibold-italic',
    'font-jakarta-bold-italic',
    'font-jakarta-extrabold-italic',
    'font-jakarta-black-italic',
  ],
  theme: {
    extend: {
      fontFamily: {
        display: ['var(--font-clash)', 'system-ui', 'sans-serif'],
        body: ['var(--font-general)', 'system-ui', 'sans-serif'],
        jakarta: ['"Plus Jakarta Sans"', 'system-ui', 'sans-serif'],
      },
      colors: {
        'brand': {
          'coral': '#FF6B6B',
          'peach': '#FFD93D',
          'mint': '#6BCF7F',
          'sky': '#4ECDC4',
          'lavender': '#A18AFF',
        },
      },
      animation: {
        'slide-up': 'slideUp 0.3s ease-out',
        'slide-down': 'slideDown 0.3s ease-out',
        'fade-in': 'fadeIn 0.3s ease-out',
        'scale-in': 'scaleIn 0.2s ease-out',
        'bounce-subtle': 'bounceSubtle 0.5s ease-out',
      },
      keyframes: {
        slideUp: {
          '0%': { transform: 'translateY(100%)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
        slideDown: {
          '0%': { transform: 'translateY(-20px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        scaleIn: {
          '0%': { transform: 'scale(0.9)', opacity: '0' },
          '100%': { transform: 'scale(1)', opacity: '1' },
        },
        bounceSubtle: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-10px)' },
        },
      },
    },
  },
  plugins: [],
}

export default config
