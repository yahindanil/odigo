/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      backgroundColor: {
        "overlay-shadow": "rgba(21, 24, 36, 0.4)",
      },
    },
  },
  plugins: [],
};
