/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    screens: {
      xxs: "370px",
      xs: "450px",
      sm: "680px",
      // breakpoint for nav
      md: "840px",
      // brekakpoing for nav
      lg: "1000px",
      xlg: "1200px",
      xxl: "1440px",
      wide: "2000px"
    },
    fontFamily: {
      rubik: ["Rubik", "sans-serif"],
      poppins: ["Poppins", "sans-serif"],
      nunito: ["Nunito", "sans-serif"],
      manrope: ["Manrope", "sans-serif"],
      firacode:["Fira Code", "monospace"],
    },
    fontSize: {
      xs: "0.75rem",
      sm: "0.8rem",
      base: "1rem",
      xl: "1.25rem",
      "2xl": "1.563rem",
      "3xl": "2.353rem",
      "4xl": "2.441rem",
      "5xl": "3.40rem",
      "6xl": "3.82rem",
    },
    extend: {
      colors: {
        "company-red": "#FF0000",
        "company-black": "#0D0D0D",
        "deep-blu": "#000117",
        "faint-white": "#f2f2f2",
      },
      boxShadow: {
        "custom-light": "0px 4px 10px #E6E6E6",
        "custom-none": "0px 0px 0px #E6E6E6",
        'custom': '0 4px 6px rgba(0, 0, 0, 0.1), 0 1px 3px rgba(0, 0, 0, 0.06)',
        "custom-3d":
          "0 8px 10px rgba(0, 0, 0, 0.15), 0 3px 6px rgba(0, 0, 0, 0.1)",
        "deep-3d":
          "0 10px 15px rgba(0, 0, 0, 0.2), 0 4px 6px rgba(0, 0, 0, 0.1)",
        "deep-9d":
          "1px 3px 12px 0px rgba(0, 0, 0, 0.49)",
      },
      backgroundImage: {
        "nav-bg-img": "url('/src/assets/images/bubble2.png')",
        "nav-bg-img2": "url('/src/assets/images/bubble.png')",
        "hero-bg-img": "url('/src/assets/images/hero-bg.png')",
        "md-img": "url('/images/md-Reapfold.png')",
        "about-bg-img": "url('/src/pages/about/images/about-hero.png')",
      },
    },
  },
  plugins: [require('tailwind-scrollbar')],
};
