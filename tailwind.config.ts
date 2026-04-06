import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/data/**/*.{js,ts,jsx,tsx}",
    "./src/lib/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "#0D0D0D",
        surface: "#141414",
        accent: {
          green: "#00FF7F",
          blue: "#007BFF",
        },
      },
      fontFamily: {
        sans: ["var(--font-geist-sans)", "system-ui", "sans-serif"],
        mono: ["var(--font-geist-mono)", "monospace"],
      },
      boxShadow: {
        glow: "0 0 40px rgba(0, 255, 127, 0.25)",
        "glow-blue": "0 0 40px rgba(0, 123, 255, 0.25)",
        "glow-sm": "0 0 20px rgba(0, 255, 127, 0.15)",
      },
      backgroundImage: {
        "grid-pattern":
          "linear-gradient(rgba(0, 255, 127, 0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(0, 123, 255, 0.03) 1px, transparent 1px)",
      },
      backgroundSize: {
        grid: "64px 64px",
      },
    },
  },
  plugins: [],
};

export default config;
