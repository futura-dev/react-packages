/** @type {import('tailwindcss').Config} */

import { futura } from "./plugin-tailwind";

export default {
  ...futura.config,
  // override base futura config
  content: ["./**"],
};
