import flowbite from "flowbite-react/tailwind";
/**
 * @type {import('@types/tailwindcss/tailwind-config').TailwindConfig}
 */
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./node_modules/flowbite/**/*.js",
    "./node_modules/flowbite-react/**/*.js",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    flowbite.content(),
  ],
  theme: {
    colors: {
      primary: "#056CF2",
      danger: "#F57068",
      "fb-grey": {
        50: "#E9EEF4",
        70: "#F8FAFC",
        100: "#F4F5F6",
        200: "#E6E6E6",
        250: "#DDE5EE",
      },
      "fb-black": {
        100: "#000000",
      },
    },
    fontFamily: {
      display: ["Inter"],
      html: ["Inter"],
      body: ["Inter"],
    },
  },
  plugins: [require("flowbite/plugin"), flowbite.plugin()],
};
