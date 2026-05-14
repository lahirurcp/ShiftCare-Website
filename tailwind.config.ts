import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./app/**/*.{ts,tsx}",
  ],
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: { "2xl": "1400px" },
    },
    extend: {
      fontFamily: {
        sans: ["var(--font-inter)", "ui-sans-serif", "system-ui", "sans-serif"],
        display: ["var(--font-syne)", "sans-serif"],
        mono: ["var(--font-mono)", "ui-monospace", "SFMono-Regular", "monospace"],
      },
      colors: {
        // shadcn tokens
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
        // ShiftCare brand tokens — CSS variable references for theme switching
        sc: {
          bg:       "rgb(var(--sc-bg) / <alpha-value>)",
          surface:  "rgb(var(--sc-surface) / <alpha-value>)",
          surface2: "rgb(var(--sc-surface2) / <alpha-value>)",
          teal:     "rgb(var(--sc-teal) / <alpha-value>)",
          "teal-2": "rgb(var(--sc-teal-2) / <alpha-value>)",
          indigo:   "rgb(var(--sc-indigo) / <alpha-value>)",
          red:      "rgb(var(--sc-red) / <alpha-value>)",
          amber:    "rgb(var(--sc-amber) / <alpha-value>)",
          green:    "rgb(var(--sc-green) / <alpha-value>)",
          text:     "rgb(var(--sc-text) / <alpha-value>)",
          "text-2": "rgb(var(--sc-text-2) / <alpha-value>)",
          "text-3": "rgb(var(--sc-text-3) / <alpha-value>)",
        },
        ali: "hsl(var(--ali))",
        skin: { base: "transparent" },
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      keyframes: {
        fadeIn: {
          from: { opacity: "0", transform: "translateY(12px)" },
          to:   { opacity: "1", transform: "translateY(0)" },
        },
        float: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%":      { transform: "translateY(-8px)" },
        },
        floatSlow: {
          "0%, 100%": { transform: "translateY(0px) rotate(0deg)" },
          "50%":      { transform: "translateY(-12px) rotate(2deg)" },
        },
        pulseGlow: {
          "0%, 100%": { boxShadow: "0 0 0 0 rgba(0,212,160,0)" },
          "50%":      { boxShadow: "0 0 24px 6px rgba(0,212,160,0.18)" },
        },
        pulseGlowRed: {
          "0%, 100%": { boxShadow: "0 0 0 0 rgba(239,68,68,0)" },
          "50%":      { boxShadow: "0 0 20px 4px rgba(239,68,68,0.2)" },
        },
        pulseGlowAmber: {
          "0%, 100%": { boxShadow: "0 0 0 0 rgba(245,158,11,0)" },
          "50%":      { boxShadow: "0 0 20px 4px rgba(245,158,11,0.18)" },
        },
        shimmer: {
          from: { backgroundPosition: "200% center" },
          to:   { backgroundPosition: "-200% center" },
        },
        scanLine: {
          "0%":   { transform: "translateY(-100%)" },
          "100%": { transform: "translateY(400%)" },
        },
        "accordion-down": {
          from: { height: "0" },
          to:   { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to:   { height: "0" },
        },
      },
      animation: {
        fadeIn:         "fadeIn 0.6s ease-out both",
        float:          "float 4s ease-in-out infinite",
        floatSlow:      "floatSlow 6s ease-in-out infinite",
        pulseGlow:      "pulseGlow 2.5s ease-in-out infinite",
        pulseGlowRed:   "pulseGlowRed 2s ease-in-out infinite",
        pulseGlowAmber: "pulseGlowAmber 2.2s ease-in-out infinite",
        shimmer:        "shimmer 3s linear infinite",
        scanLine:       "scanLine 3s ease-in-out infinite",
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up":   "accordion-up 0.2s ease-out",
      },
    },
  },
};

export default config;
