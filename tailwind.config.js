/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        primary: {
          light: '#3B82F6', // blue-500
          dark: '#60A5FA', // blue-400
        },
        background: {
          light: '#FFFFFF',
          dark: '#111827', // gray-900
        },
        surface: {
          light: '#F3F4F6', // gray-100
          dark: '#1F2937', // gray-800
        },
      },
    },
  },
  plugins: [],
}