/** @type {import('tailwindcss').Config} */

import { PluginAPI } from "tailwindcss/types/config";

const plugin = require("tailwindcss/plugin");

export const futura = plugin(
  (_api: PluginAPI) => {
    console.log("@futura-dev/react-ui-kit tailwind configuration loading ...");
    //
  },
  {
    darkMode: "class",
    theme: {
      extend: {
        colors: {
          background: {
            light: "#ffffff",
            dark: "#000000",
          },
          primary: {
            light: {
              DEFAULT: "#000000",
              100: "",
              300: "#262626",
              500: "#000000",
            },
            dark: "#ffffff",
          },
          "futura-purple": {
            DEFAULT: "#6C09EF",
            100: "",
            300: "",
            500: "#6C09EF",
            700: "",
            900: "",
          },
          "futura-yellow": {
            DEFAULT: "#F8D521",
            100: "",
            300: "",
            500: "#F8D521",
            700: "",
            900: "",
          },
          "futura-green": {
            DEFAULT: "#8AF4A8",
            100: "",
            300: "#B9F9CB",
            500: "#8AF4A8",
            700: "",
            900: "",
          },
        },
      },
    },
  }
);
