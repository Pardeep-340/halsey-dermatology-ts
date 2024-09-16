import type { Config } from "tailwindcss";
import { PluginAPI } from "tailwindcss/types/config";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    container: {
      center: true,
      padding: {
        DEFAULT: "20px",
        sm: "24px",
      },
    },
    extend: {
      backgroundImage: {
        "hero-bg": "url('/assets/images/homepage/webp/hero-bg.webp')",
        "hero-skin": "url('/assets/images/skin-concerns/hero-skin.webp')",
        nav: "url('/assets/images/common/webp/nav-bg.webp')",
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
        "black-border":
          "linear-gradient(0deg, rgba(218, 218, 218, 0) 0%, rgba(111, 111, 111, 0.24) 50.5%, rgba(206, 206, 206, 0) 100%)",
      },
      fontFamily: {
        archivo: ["'Archivo', sans-serif"],
        kaushanScript: ["'Kaushan Script', cursive"],
      },
      colors: {
        laurel: "#6e9277",
        holly: "#001008",
        "snow-drift": "#f5f8f6",
        "white-rock": "#f1ede2",
        "dove-gray": "#696969",
        "hint-of-green": "#f1fff5",
        "moon-mist": "#ded9cc",
        "dark-gray": "#5E5E5E",
        nandor: "#4D5852",
        "off-black": "#CFCFCF",
        stack: "#929693",
        "deep-fir": "#000C03",
      },
      fontSize: {
        "custom-base": "17px",
        "custom-lg": "22px",
        "custom-xl": "25px",
        "custom-2xl": "28px",
        "custom-3xl": "32px",
        "custom-4xl": "35px",
        "custom-6xl": "58px",
        "custom-10xl": "200px",
      },
      boxShadow: {
        white: "inset 0px -80px 0px 0px white",
        "off-green": "inset 0px -80px 0px 0px #6e9277",
        sm: "0px 0px 20px 0px #6e9277",
        md: "0px 3.32px 15.69px 5.53px #00000014",
        lg: "0px 10px 20px 0px #00000026",
        xl:"0px 4px 70px 0px #6E92774D"
      },
      lineHeight: {
        100: "100%",
        108.8: "108.8%",
        110: "110%",
        111: "111%",
        120: "120%",
        130: "130%",
        140: "140%",
        145: "145%",
        150: "150%",
        160: "160%",
        170: "170%",
        184: "184%",
        190: "190%",
      },
      borderRadius: {
        2.5: "10px",
        5:"20px"
      }
    },
  },
  plugins: [
    function ({ addUtilities }: PluginAPI) {
      const newUtilities = {
        ".common-transition": {
          transition: "all 300ms linear",
        },
      };
      addUtilities(newUtilities);
    },
  ],
};
export default config;
