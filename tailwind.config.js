/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
    },
    colors: {
      "roman-coffee": {
        50: "#f6f3f0",
        100: "#e8e1d9",
        200: "#d3c4b5",
        300: "#ba9e8a",
        400: "#a68169",
        500: "#976f5b",
        600: "#795548",
        700: "#684840",
        800: "#593d3a",
        900: "#4e3735",
        950: "#2c1c1c",
      },
      boulder: {
        50: "#f6f6f6",
        100: "#e7e7e7",
        200: "#d1d1d1",
        300: "#b0b0b0",
        400: "#888888",
        500: "#757575",
        600: "#5d5d5d",
        700: "#4f4f4f",
        800: "#454545",
        900: "#3d3d3d",
        950: "#262626",
      },
      "dodger-blue": {
        50: "#eefaff",
        100: "#daf3ff",
        200: "#bdebff",
        300: "#8fe0ff",
        400: "#5accff",
        500: "#34b1fd",
        600: "#2196f3",
        700: "#167bdf",
        800: "#1863b5",
        900: "#1a548e",
        950: "#153456",
      },
      white: '#ffffff',
      black: '#000000'
    },
    fontFamily: {
      sans: ['var(--font-inter)'],
      mono: ['var(--font-roboto)'],
      serif:['var(--font-montserrat)']
    }
  },
  plugins: [require('@tailwindcss/forms')],
};
