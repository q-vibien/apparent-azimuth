/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      fontFamily: {
        Aquire: ["Aquire", "sans-serif"],
        Merriweather: ["Merriweather Sans", "sans-serif"],
      },

      fontSize: {
        sm: "0.8rem",
        base: "1rem",
        xl: "1.25rem",
        "2xl": "1.563rem",
        "3xl": "1.953rem",
        "4xl": "2.441rem",
        "5xl": "3.052rem",
      },

      colors: {
        background: "#0B132B",
        aqua: "#5BC0BE",
        "dark-blue": "1C2541",
        "grayish-blue": "#3A506B",
      },

      cursor: {
        default: "url(/.png)",
      },

      plugins: [],
    },
  },
};
