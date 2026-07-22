/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "#e6dfcc",
        foreground: "#1a1a1a",
        muted: "#d9d4c3",
        "muted-foreground": "#333333",
        accent: "#a52a2a",
      },
      fontFamily: {
        oswald: ["Rye", "Playbill", "serif"],
        mono: ["Courier Prime", "monospace"],
        serif: ["Special Elite", "serif"],
        sans: ["Special Elite", "serif"],
      }
    },
  },
  plugins: [],
}
