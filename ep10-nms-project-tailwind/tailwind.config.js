/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      translate: {
        200: "200%",
      },
      colors: {
        "custom-green": "#00900e",
        primary: "#fff",
      },
    },
  },
  plugins: [],
};
