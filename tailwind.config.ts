import { type Config } from "tailwindcss";

export default {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors:{
        orange:'#ff7961',
        black:'#353535',
        gray:'#f8f8f8',
        white:'#ffffff',
        pink:'#f35c7e'
      }
    },
  },
  plugins: [],
} satisfies Config;
