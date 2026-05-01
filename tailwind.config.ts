import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./lib/**/*.{js,ts,jsx,tsx,mdx}"
  ],
  theme: {
    extend: {
      colors: {
        fume: {
          blush: "#fff8f7",
          blush2: "#ffe9eb",
          rose: "#d92365",
          plum: "#710a73",
          magenta: "#b3004e",
          violet: "#973596",
          green: "#00843d",
          ink: "#27171a",
          muted: "#5a4045",
          line: "#f1d4da"
        }
      },
      fontFamily: {
        heading: ["Montserrat", "ui-sans-serif", "system-ui"],
        body: ["Open Sans", "ui-sans-serif", "system-ui"]
      },
      boxShadow: {
        soft: "0 18px 50px rgba(113, 10, 115, 0.10)",
        lift: "0 20px 60px rgba(217, 35, 101, 0.18)"
      }
    }
  },
  plugins: []
};

export default config;
