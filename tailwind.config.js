/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        blueOne: '#0084f4',
        blueTwo: '#66b3ff',
        blueThree: '#0058c1',
        greenOne: '#29db83',
        greenTwo: '#6fffb3',
        greenThree: '#00a855',
      },
    },
  },
  plugins: [],
}

