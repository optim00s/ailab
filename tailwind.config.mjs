/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        'ailab': {
          DEFAULT: '#E7AAB6',
        },
        'ailab-purple': {
          DEFAULT: '#8078C3'
        },
        'ailab-yellow': {
          DEFAULT: '#D7EB56'
        },
      }
    }
  },
  plugins: [],
};