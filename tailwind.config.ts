/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        sage: {
          50: '#f6f8f6',
          100: '#e8ede7',
          200: '#d1ddd0',
          300: '#afc5ad',
          400: '#89a786',
          500: '#78A671', // FamilySearch green
          600: '#5b8155',
          700: '#4a6544',
          800: '#3e5138',
          900: '#344530',
        },
        brown: {
          50: '#f8f6f5',
          100: '#e8e2df',
          200: '#d4c8c3',
          300: '#b7a49b',
          400: '#967d71',
          500: '#6B4B3E', // FamilySearch brown
          600: '#5d4136',
          700: '#4e362d',
          800: '#422e27',
          900: '#382823',
        },
        purple: {
          50: '#f7f6fe',  // Your soft purple
          100: '#e4e1fc',
          200: '#cdc7f9',
          300: '#afa5f4',
          400: '#9587ef',
          500: '#7a69e9',
          600: '#6853e0',
          700: '#553bc7',
          800: '#4630a2',
          900: '#3a2884',
        },
        yellow: {
          50: '#fefce8',  // Your soft yellow
          100: '#fef9c3',
          200: '#fef08a',
          300: '#fde047',
          400: '#facc15',
          500: '#eab308',
          600: '#ca8a04',
          700: '#a16207',
          800: '#854d0e',
          900: '#713f12',
        },
      },
    },
  },
  plugins: [],
}