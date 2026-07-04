import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./app/**/*.{js,ts,jsx,tsx,mdx}", "./components/**/*.{js,ts,jsx,tsx,mdx}", "./data/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        obsidian: "#05070B",
        graphite: "#0D1117",
        line: "rgba(255,255,255,0.12)",
        blueIntel: "#38BDF8",
        amberRisk: "#F59E0B",
        redCritical: "#EF4444",
        greenSafe: "#10B981",
        muted: "#94A3B8"
      },
      boxShadow: {
        glow: "0 0 52px rgba(56,189,248,0.18)",
        deepGlow: "0 0 120px rgba(56,189,248,0.18)"
      },
      fontFamily: {
        sans: ["Inter", "ui-sans-serif", "system-ui", "sans-serif"],
        mono: ["JetBrains Mono", "ui-monospace", "SFMono-Regular", "monospace"]
      }
    }
  },
  plugins: []
};
export default config;
