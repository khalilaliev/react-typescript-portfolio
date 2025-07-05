/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        "bg-custom": "#E5E7EB",
        "header-bg": "#080A0B",
        "dark-text": "#ECEDEE",
        "dark-bg": "#16181A",
        "secondary-bg": "#2B2F30",
        "hover-bg": "#15243C",
        "blog-text": "#9CA1A5",
      },
      // height: {
      //   '80vh-screen': '80vh'
      // },
      width: {
        certificate: "170px",
      },
      container: {
        center: true,
        padding: "2rem",
      },
    },
  },
  plugins: [require("rippleui")],
};
