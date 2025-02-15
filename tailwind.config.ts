import type { Config } from 'tailwindcss'

const config = {
  content: [
    './pages/**/*.{ts,tsx}',
    './components/**/*.{ts,tsx}',
    './app/**/*.{ts,tsx}',
    './src/**/*.{ts,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        blue: '#2986FD', // Example custom color
        black: '#1A1A1A', // Another custom color
        subTitle: '#8D8D8D',
        white: '#FFFFFF', // Example accent color
        offWhite: '#BEBEBE',
        darkBlue: '#091E42',
        borderStroke: '#6C6C6C',
      },
      boxShadow: {
        packages: '4px 4px 13px 4px rgba(0, 0, 0, 0.15)',
      },
    },
  },
} satisfies Config

export default config
