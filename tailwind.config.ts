import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./app/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        ink: {
          950: "#05070F",
          900: "#0A1128",
          800: "#0F1626",
          700: "#161E36",
        },
        void: {
          950: "#05060B",
          900: "#0B0D16",
          800: "#10131E",
          700: "#171B2C",
        },
        spectrum: {
          violet: "#8B5CF6",
          cyan: "#22D3EE",
          pink: "#F472B6",
          amber: "#FBBF24",
          lime: "#A3E635",
          fuchsia: "#E879F9",
        },
        paper: "#F3F6FC",
        muted: "#8C99B8",
        docker: {
          accent: "#2EACDB",
          dark: "#0E5C82",
          soft: "#0E3A56",
        },
        kube: {
          accent: "#5865F2",
          dark: "#3C34A5",
          violet: "#8C52FF",
          soft: "#241C4E",
        },
      },
      fontFamily: {
        display: ["var(--font-display)", "sans-serif"],
        heading: ["var(--font-heading)", "sans-serif"],
        sans: ["var(--font-sans)", "sans-serif"],
        mono: ["var(--font-mono)", "monospace"],
      },
      keyframes: {
        blink: {
          "0%, 49%": { opacity: "1" },
          "50%, 100%": { opacity: "0" },
        },
        "fade-up": {
          "0%": { opacity: "0", transform: "translateY(14px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
      },
      animation: {
        blink: "blink 1s step-start infinite",
        "fade-up": "fade-up 0.6s ease-out forwards",
      },
    },
  },
  plugins: [],
};

export default config;
