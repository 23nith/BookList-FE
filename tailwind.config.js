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
      },
      width: {
        forty: "40px",
      },
      height: {
        forty: "40px",
      },
      margin: {
        negative_1: "-1px",
      },
    },
  },
  plugins: [],
};
