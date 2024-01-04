/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      screens: {
        xs: "475px", // Extra small devices
        sm: "640px", // Small devices
        md: "1024px", // Medium devices
        lg: "1440px", // Large devices
        xl: "1280px", // Extra large devices
      },
    },
  },
  plugins: ["daisyui"],
  daisyui: {
    themes: ["light", "dark"],
  },
};
