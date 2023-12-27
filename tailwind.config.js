/** @type {import('tailwindcss').Config} */
import keepPreset from "keep-react/preset";
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "node_modules/keep-react/**/*.{js,jsx,ts,tsx}"
  ],
  presets: [keepPreset],
  theme: {
    extend: {
      colors: {
        secondary: "#070491",
      },
      backgroundColor: {
        primary: '#080f28',
      },
      textColor: {
        white: '#ffffff',
      },
      fontFamily: {
        sans: ['sans-serif'],
      },
    },
  },
  plugins: [],
}