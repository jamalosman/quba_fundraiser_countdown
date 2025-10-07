/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'mosque-burgundy': '#8B1515',
        'mosque-maroon': '#A52A2A',
        'mosque-gold': '#D4A017',
        'mosque-cream': '#F5F0E8',
        'mosque-dark': '#5C1010',
      },
      animation: {
        'pulse-slow': 'pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'bounce-slow': 'bounce 2s infinite',
      }
    },
  },
  plugins: [],
}
