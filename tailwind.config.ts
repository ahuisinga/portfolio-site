import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  plugins: [require("@headlessui/tailwindcss")],
  theme: {
    extend: {
      keyframes: {
        cursor: {
          "50%": { opacity: "0" },
        },
      },
    },
  },
};
export default config;
