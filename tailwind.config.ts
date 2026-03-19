import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        bg: "#FAFAF8",
        surface: "#FFFFFF",
        border: "#D9D5CC",
        text: "#1A1A18",
        "text-muted": "#5C5A54",
        accent: "#2B5C2E",
        "accent-light": "#EAF2EB",
        link: "#1A4D1C",
        "link-hover": "#2B5C2E",
      },
      fontFamily: {
        display: ["Libre Baskerville", "serif"],
        body: ["Source Serif 4", "serif"],
        ui: ["DM Sans", "sans-serif"],
      },
      maxWidth: {
        content: "760px",
      },
    },
  },
  plugins: [],
};
export default config;
