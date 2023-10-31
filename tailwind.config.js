/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    colors: {
      AlmostWhite: 'hsl(0, 0%, 98%)',
      MiedumGray: 'hsl(0, 0%, 41%)',
      AlmostBlack: 'hsl(0, 0%, 8%)',
    },
    extend: {
    },
    fontFamily: {
      Epilogue: ['Epilogue']
    }
  },
  plugins: [require("daisyui")],

  daisyui: {
    themes: ["light"],
  },
}