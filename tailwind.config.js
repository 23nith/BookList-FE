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
      },
      borderRadius: {
        thirty: "30px",
        3: "3px",
      },
      width: {
        forty: "40px",
      },
      height: {
        forty: "40px",
      },
      margin: {
        negative_1: "-1px",
        "20vh": "20vh",
        "10px": "10px",
      },
      padding: {
        "3.5em": "3.5em",
        "8px": "8px",
        "12px": "12px",
      },
      maxWidth: {
        450: "450px",
        300: "300px",
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
    },
  },
  plugins: [],
};
