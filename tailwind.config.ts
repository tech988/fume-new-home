import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./lib/**/*.{ts,tsx}"
  ],
  theme: {
    extend: {
      colors: {
        fume: {
          primary: "#d92365",
          secondary: "#710a73",
          accent: "#bf1b75",
          charcoal: "#1e1a24",
          muted: "#f7f3f7"
        }
      },
      fontFamily: {
        heading: ["Montserrat", "Arial", "sans-serif"],
        body: ["Open Sans", "Arial", "sans-serif"]
      },
      boxShadow: {
        soft: "0 18px 60px rgba(113, 10, 115, 0.10)",
        card: "0 12px 36px rgba(30, 26, 36, 0.08)"
      }
    }
  },
  plugins: []
};

export default config;
