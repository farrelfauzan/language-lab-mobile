/** @type {import('tailwindcss').Config} */
module.exports = {
  // NOTE: Update this to include the paths to all files that contain Nativewind classes.
  content: ["./app/**/*.{js,jsx,ts,tsx}", "./components/**/*.{js,jsx,ts,tsx}"],
  presets: [require("nativewind/preset")],
  theme: {
    extend: {
      fontFamily: {
        Geist: ["Geist", "sans-serif"],
        "Geist-Variable": ["Geist-Variable", "sans-serif"],
      },
    },
    fontFamily: {
      sans: ["Geist", "system-ui", "-apple-system", "sans-serif"],
      serif: ["Geist", "serif"],
      mono: ["Geist", "monospace"],
    },
  },
  plugins: [],
};
