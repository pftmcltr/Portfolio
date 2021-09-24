module.exports = {
  purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    colors: {
      transparent: "transparent",
      current: "currentColor",
      blue: {
        light: "#2B8DC9",
        DEFAULT: "#192D3C",
        dark: "#19232C",
      },
      white: {
        DEFAULT: "white",
      },
      green: {
        light: "#82BE9A",
        DEFAULT: "#5B8972",
        dark: "#2E6549",
        darker: "#225138",
      },
      orange: {
        light: "#FFFCE4",
        DEFAULT: "#F28B37",
        dark: "#DA7437",
        darker: "#A55A2F",
      },
      red: {
        light: "#CA8073",
        DEFAULT: "#B9233E",
        dark: "#7E2026",
      },
      gray: {
        darkest: "#1f2d3d",
        dark: "#3c4858",
        DEFAULT: "#c0ccda",
        light: "#e0e6ed",
        lightest: "#f9fafc",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
