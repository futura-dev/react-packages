/** @type {import('tailwindcss').Config} */

import { futura } from "../../packages/react-ui-kit/dist/plugin-tailwind";

module.exports = {
  content: ["./src/*.{js,ts,jsx,tsx,mdx}"],
  plugins: [futura],
};
