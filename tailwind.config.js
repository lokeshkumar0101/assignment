/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "light-theme-gray": "#bfbfbf",
        "light-button-gray": "#bfbfbf",
        "light-font": "#474747"
      },
      borderRadius: {
        card: "10px"
      },
      boxShadow: {
        "light-card":
          "12px 12px 16px 0 rgba(0, 0, 0, 0.3), -8px -8px 12px 0 rgba(0, 0, 0, .25)",
        "light-button":
          "6px 6px 8px 0 rgba(0, 0, 0, 0.3), -4px -4px 6px 0 rgba(0, 0, 0, .25)"
      },
      height: {
        card: "300px",
        button: "40px"
      },
      width: {
        card: "250px",
        button: "100px"
      }
    }
    },
  plugins: [],
}

