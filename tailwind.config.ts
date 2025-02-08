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
        white: '#FFFFFF', // Example accent color
        offWhite: '#BEBEBE',
      },
    },
  },
} satisfies Config

export default config
