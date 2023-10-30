/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        "home-desktop": "url('assets/home/background-home-desktop.jpg')",
        "home-mobile": "url('assets/home/background-home-mobile.jpg')",
        "home-tablet": "url('assets/home/background-home-tablet.jpg')",
      },
    },
  },
  plugins: [],
};
