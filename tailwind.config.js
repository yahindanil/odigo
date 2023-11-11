/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      backgroundColor: {
        "overlay-shadow": "rgba(21, 24, 36, 0.4)",
        "overlay-shadow-2": "rgba(21, 24, 36, 0.6)",
      },
      screens: {
        "max-xl": { max: "1280px" },
        "max-lg": { max: "1024px" },
        "max-md": { max: "768px" },
        "max-sm": { max: "640px" },
      },
    },
  },
  plugins: [],
};
