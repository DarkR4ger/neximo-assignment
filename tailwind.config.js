/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        darkBlue: '#0A66C2',
        veryLightBlue: '#D9E4EF',
        fadingBlue: '#73A1FB',
        mediumBlue: '#2F73A0',
        lightGrey: '#3E3E3E'
      }
    },
  },
  plugins: [],
}

