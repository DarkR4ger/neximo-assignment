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
      },
      boxShadow: {
        box: '0px 4px 16px rgba(17,17,26,0.1),0px 8px 24px rgba(17,17,26,0.1),0px 16px 56px rgba(17,17,26,0.1)'
      }
    },
  },
  plugins: [],
}

