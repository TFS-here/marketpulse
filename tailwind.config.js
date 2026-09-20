/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./App.{js,jsx,ts,tsx}",
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  presets: [require("nativewind/preset")],
  theme: {
    extend: {
      colors: {
        background: "#111827",
        surface: "#1F2937",
        "text-primary": "#F8FAFC",
        "text-secondary": "#CBD5E1",
        purchase: "#22C55E",
        sale: "#EF4444",
        analytics: "#60A5FA",
        analytics2: "#A78BFA",
      },
    },
  },
  plugins: [],
};