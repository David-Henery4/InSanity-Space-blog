/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{js,jsx}",
    "./components/**/*.{js,jsx}",
    "./app/**/*.{js,jsx}",
    "./src/**/*.{js,jsx}",
  ],
  prefix: "",
  theme: {
    screens: {
      lgMob: "27.5em", // 440px
      xLgMob: "32.5em", // 520px
      smTab: "35em", // 560px
      tab: "41.25em", // 660px
      medTab: "47.5em", // 760px
      lgTab: "57.75em", // 924px
      lap: "64em", // 1024px
      lgLap: "67.5em", // 1080px
      desk: "70.25em", // 1124px
      lgDesk: "80em", // 1280px
    },
    colors: {
      orange: "#F38D14",
      veryDarkBlue: "#0B131C",
      white: "#F6F8FC",
      black: "#000000",
      grey: "#717171",
      lightGrey: "#A4A3A3",
      darkGrey: "#212020",
      offWhite: "#E2E8F0",
      lightGreen: "#DCFCE7",
      green: "#22C55E",
    },
    gridTemplateColumns: {
      mob: "24px repeat(10,1fr) 24px",
      tab: "40px repeat(10,1fr) 40px",
      lap: "105px repeat(10,1fr) 105px",
      desk: "140px repeat(10,1fr) 140px",
      postsMob: "repeat(auto-fit, minmax(200px, 1fr))",
      postCard: "repeat(2,1fr)",
      postsSectionLap: "repeat(12,1fr)",
    },
    gridTemplateRows: {
      postCard: "min-content 1fr", // 1fr was auto
    },
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
};