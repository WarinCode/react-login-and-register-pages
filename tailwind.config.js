import colors from "tailwindcss/colors"

/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    colors: {
      transparent: 'transparent',
      current: 'currentColor',
      primary: "#14eddb",
      secondary: "#00a8a0",
      dark: "#171717",
      gray200: "#efefef",
      gray300: "#b0b0b0",
      white: colors.white,
      black: colors.black,
      blue: colors.blue
    },
    extend: {
      fontFamily: {
        'prompt': ["Prompt", " sans-serif"]
      }
    },
  },
  plugins: [],
}