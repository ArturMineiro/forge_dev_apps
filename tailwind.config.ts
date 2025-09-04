import type { Config } from "tailwindcss";

export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  darkMode: "media", // usa o tema do sistema (prefers-color-scheme)
  theme: {
    extend: {
      colors: {
        brand: {
          DEFAULT: "#6D28D9", // roxo “marca”
          600: "#7C3AED",
        },
        accent: {
          DEFAULT: "#FF3EA5", // rosa neon (usar como accent)
          600: "#E83694",
        },
        light: {
          bg: "#FFFFFF",
          muted: "#F3F4F6",
          fg: "#111827",
          "fg-muted": "#6B7280",
          border: "#E5E7EB",
        },
        dark: {
          bg: "#0F0F14",
          muted: "#14151C",
          fg: "#E5E7EB",
          "fg-muted": "#9CA3AF",
          border: "#1F2937",
        },
      },
      container: {
        center: true,
        padding: "1rem",
      },
      boxShadow: {
        subtle: "0 1px 2px 0 rgb(0 0 0 / 0.05)",
      },
    },
  },
  plugins: [],
} satisfies Config;
