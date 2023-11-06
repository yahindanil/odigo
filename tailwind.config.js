/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      backgroundColor: {
        "overlay-shadow": "rgba(21, 24, 36, 0.4)",
      },
      screens: {
        "max-sm": { max: "640px" },
        "max-md": { max: "768px" },
        "max-lg": { max: "1024px" },
        "max-xl": { max: "1280px" },
      },
    },
  },
  plugins: [],
};
