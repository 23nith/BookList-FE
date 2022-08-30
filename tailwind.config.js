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
      },
      padding: {
        "3.5em": "3.5em",
      },
      maxWidth: {
        450: "450px",
      },
      boxShadow: {
        custom: "rgba(0, 0, 0, 0.2) 0px 10px 30px -5px",
      },
    },
  },
  plugins: [],
};
