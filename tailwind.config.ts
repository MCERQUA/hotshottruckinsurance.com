import type { Config } from "tailwindcss";

/* ============================================================
   HOT SHOT TRUCK INSURANCE — "Open Road" palette
   clay = deep navy · sage = teal · gold = amber
   ============================================================ */

const config: Config = {
  content: [
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/content/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        cream: "#F8FAFC",
        sand: "#EEF2F8",
        white: "#FFFFFF",
        clay: {
          DEFAULT: "#1B2A5E",
          dark: "#111B3E",
          light: "#2D4494",
          50: "#EEF1FA",
          100: "#D4DCF3",
          200: "#A9B9E7",
          300: "#7D96D8",
          400: "#4D6BC4",
          500: "#2D4494",
          600: "#1B2A5E",
          700: "#111B3E",
          800: "#0A1128",
          900: "#050A18",
        },
        sage: {
          DEFAULT: "#3D9E7A",
          dark: "#2A7559",
          light: "#5DBDA0",
          50: "#EBF7F3",
          100: "#D0EDE4",
          200: "#A1DCC9",
          300: "#5DBDA0",
          400: "#3DAF8A",
          500: "#3D9E7A",
          600: "#2A7559",
          700: "#1E5842",
        },
        gold: {
          DEFAULT: "#E88C0D",
          dark: "#B86900",
          light: "#F0AD4E",
          50: "#FEF5E7",
          100: "#FDE5BE",
          200: "#FACB7D",
          300: "#F5AD3E",
          400: "#F09A1C",
          500: "#E88C0D",
          600: "#B86900",
          700: "#8A4E00",
        },
        espresso: "#0F1824",
        cocoa: "#3D4A5C",
        mocha: "#6B7A8E",
        adobe: "#D8E0EE",
        adobeDark: "#B8C4D8",
      },
      fontFamily: {
        heading: ["var(--font-heading)", "Georgia", "serif"],
        body: ["var(--font-body)", "system-ui", "sans-serif"],
      },
      borderRadius: {
        arch: "2rem 2rem 2rem 2rem",
        arch2: "2.5rem 2.5rem 1.5rem 1.5rem",
        "4xl": "2rem",
        "5xl": "2.5rem",
      },
      backgroundImage: {
        "sunrise-bands":
          "linear-gradient(180deg, #F8FAFC 0%, #EEF2F8 40%, #E8EFF8 70%, #F8FAFC 100%)",
        "warm-radial":
          "radial-gradient(circle at 30% 20%, rgba(45,68,148,0.10) 0%, transparent 50%), radial-gradient(circle at 80% 70%, rgba(61,158,122,0.08) 0%, transparent 55%)",
        "clay-gradient": "linear-gradient(135deg, #1B2A5E 0%, #2D4494 100%)",
        "sage-gradient": "linear-gradient(135deg, #3D9E7A 0%, #5DBDA0 100%)",
        "gold-gradient": "linear-gradient(135deg, #E88C0D 0%, #F0AD4E 100%)",
      },
      boxShadow: {
        warm: "0 10px 40px -15px rgba(27, 42, 94, 0.22), 0 4px 12px -6px rgba(15, 24, 36, 0.08)",
        "warm-lg": "0 30px 70px -20px rgba(27, 42, 94, 0.28), 0 10px 30px -10px rgba(15, 24, 36, 0.10)",
        card: "0 2px 8px -2px rgba(15, 24, 36, 0.06), 0 1px 3px -1px rgba(15, 24, 36, 0.04)",
        "card-hover": "0 20px 50px -15px rgba(27, 42, 94, 0.22), 0 8px 20px -8px rgba(15, 24, 36, 0.10)",
        arch: "inset 0 -8px 30px -10px rgba(27, 42, 94, 0.10)",
      },
      keyframes: {
        "fade-up": { "0%": { opacity: "0", transform: "translateY(20px)" }, "100%": { opacity: "1", transform: "translateY(0)" } },
        "slow-zoom": { "0%, 100%": { transform: "scale(1)" }, "50%": { transform: "scale(1.05)" } },
        shimmer: { "0%": { backgroundPosition: "-200% 0" }, "100%": { backgroundPosition: "200% 0" } },
        "arch-rise": { "0%": { transform: "scaleY(0.6)", opacity: "0", transformOrigin: "bottom" }, "100%": { transform: "scaleY(1)", opacity: "1", transformOrigin: "bottom" } },
      },
      animation: {
        "fade-up": "fade-up 0.7s ease-out forwards",
        "slow-zoom": "slow-zoom 20s ease-in-out infinite",
        shimmer: "shimmer 3s linear infinite",
        "arch-rise": "arch-rise 0.8s cubic-bezier(0.16, 1, 0.3, 1) forwards",
      },
    },
  },
  plugins: [],
};

export default config;
