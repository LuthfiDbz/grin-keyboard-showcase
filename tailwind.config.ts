import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      colors: {
        base: {
          950: "#0A0D0B", // deepest charcoal, faint green undertone (PCB shadow)
          900: "#12160F", // primary background
          850: "#171C15",
          800: "#1D2319", // card surface
          700: "#2A3324", // raised surface / border glow base
        },
        stroke: "rgba(237, 239, 231, 0.08)",
        lime: {
          DEFAULT: "#B7D96A", // muted keycap lime
          bright: "#CFEB86",
          dim: "#8FAE55",
        },
        amber: {
          DEFAULT: "#D8A853", // rotary-knob gold
          dim: "#A9803D",
        },
        ink: {
          50: "#F3F4EE",
          300: "#C4C9BB",
          500: "#8B9282",
          700: "#5A6153",
        },
      },
      fontFamily: {
        display: ["var(--font-display)"],
        body: ["var(--font-body)"],
        mono: ["var(--font-mono)"],
      },
      boxShadow: {
        keycap:
          "0 1px 0 rgba(255,255,255,0.06) inset, 0 -6px 12px rgba(0,0,0,0.35) inset, 0 14px 30px -12px rgba(0,0,0,0.6)",
        "keycap-sm":
          "0 1px 0 rgba(255,255,255,0.08) inset, 0 6px 16px -8px rgba(0,0,0,0.55)",
      },
      borderRadius: {
        key: "0.85rem",
      },
      letterSpacing: {
        wide2: "0.18em",
      },
      keyframes: {
        rise: {
          "0%": { opacity: "0", transform: "translateY(14px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        press: {
          "0%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(2px)" },
          "100%": { transform: "translateY(0)" },
        },
      },
      animation: {
        rise: "rise 0.7s cubic-bezier(0.16,1,0.3,1) both",
      },
    },
  },
  plugins: [],
};

export default config;
