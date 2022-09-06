/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        custom_gray: "#434449",
        custom_light_gray: "#f1f1f4",
        custom_light_gray2: "#f1f2f7",
        custom_blue: "#3f51b5",
      },
      borderRadius: {
        30: "30px",
        3: "3px",
      },
      width: {
        40: "40px",
      },
      height: {
        40: "40px",
        "100vh": "100vh",
      },
      margin: {
        negative_1: "-1px",
        "20vh": "20vh",
        "10px": "10px",
      },
      padding: {
        "3.5em": "3.5em",
        "8px": "8px",
        "10px": "10px",
        "12px": "12px",
        "15px": "15px",
      },
      maxWidth: {
        200: "200px",
        300: "300px",
        450: "450px",
        610: "610px",
        840: "840px",
      },
      minWidth: {
        140: "140px",
      },
      boxShadow: {
        custom: "rgba(0, 0, 0, 0.2) 0px 10px 30px -5px",
      },
      fontSize: {
        "2em": "2em",
      },
      lineHeight: {
        1.2: 1.2,
      },
      gap: {
        "1em": "1em",
      },
      flexGrow: {
        3: "3",
        5: "5",
      },
    },
  },
  plugins: [],
};
