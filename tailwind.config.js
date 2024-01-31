/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        // "secondary-400": "#1e1e1e",
        // "secondary-200": "#252526",
        // "secondary-300": "#303030",
        // "secondary-100": "#363636",
        // "secondary-light": "#333333",
        // "secondary-50": "#858585",
        // "primary-600" : "#397cff",
        // "primary-400": "#007acc",
        // "primary-800": "#2a3e54",
        // "success-400" : "#16825d",
        // "primary-text": "#cccccc",

        // "warning-primary" : "#f2eb00",
        // "code-orange": "#d88e74",
        // "code-light-blue": "#8ddaff",
        // "code-blue": "#1cbbff",
        // "code-green":"#00d3b3",

        /////////// Default ///////////
        "default-600": "#1E1E1E",
        "default-400": "#252526",
        "default-300": "#333333",
        "default-200": "#2D2D2D",
        "default-100": "#3C3C3C",
        "default-light": "#858585",
        "default-50": "#F0F0F0",
        ///////////// text color /////////
        defaultText: "#FFFFFF",
        grayText: "#CCCCCC",
        orangeText: "#CE9178",
        blueText: "#397cff",
        cyanText: "#7BDCFE",
        greenText: "#4EC9B0",
        purpleText: "#C586C0",
      },
    },
  },
  plugins: [],
};
