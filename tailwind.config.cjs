/** @type {import('tailwindcss').Config} */

export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {},
  },
  plugins: [require("daisyui")],
  daisyui: {
    themes: [
      {
        mytheme: {
          primary: "#7c86ff",

          secondary: "#43d7f4",

          accent: "#45f2c7",

          neutral: "#030600",

          "base-100": "#f5f1fe",

          info: "#00e4ff",

          success: "#00e09e",

          warning: "#fcd34d",

          error: "#ff7477",
        },
      },
      {
        darkTheme: {
          primary: "#7c86ff",

          secondary: "#43d7f4",

          accent: "#45f2c7",

          neutral: "#030600",

          "base-100": "#343434",

          info: "#00e4ff",

          success: "#00e09e",

          warning: "#fcd34d",

          error: "#ff7477",
        },
      },
    ],
  },
};
