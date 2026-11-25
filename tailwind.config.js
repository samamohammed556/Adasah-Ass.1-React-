import flowbiteReact from "flowbite-react/plugin/tailwindcss";

export default {
  future: {
    hoverOnlyWhenSupported: true,
  },
  content: ["./index.html", "./src/**/*.{js,jsx,ts,tsx}", ".flowbite-react\\class-list.json"],
  theme: {
    extend: {
      fontFamily: {
        tajawal: ["Tajawal", "system-ui", "-apple-system", "sans-serif"],
      },
      colors: {
        bg: "rgb(var(--bg-rgb) / <alpha-value>)",
        "bg-header": "rgb(var(--bg-header-rgb) / <alpha-value>)",
        surface: "rgb(var(--surface-rgb) / <alpha-value>)",
        "surface-secondary": "rgb(var(--surface-secondary-rgb) / <alpha-value>)",
        "surface-hover": "rgb(var(--surface-hover-rgb) / <alpha-value>)",
        border: "rgb(var(--border-rgb) / <alpha-value>)",
        "border-hover": "rgb(var(--border-hover-rgb) / <alpha-value>)",
        primary: "rgb(var(--primary-rgb) / <alpha-value>)",
        "primary-from": "rgb(var(--primary-from-rgb) / <alpha-value>)",
        "primary-to": "rgb(var(--primary-to-rgb) / <alpha-value>)",
        "primary-hover": "rgb(var(--primary-hover-rgb) / <alpha-value>)",
        accent: "rgb(var(--accent-rgb) / <alpha-value>)",
        "accent-secondary": "rgb(var(--accent-secondary-rgb) / <alpha-value>)",
        text: "rgb(var(--text-rgb) / <alpha-value>)",
        "text-muted": "rgb(var(--text-muted-rgb) / <alpha-value>)",
        "text-subtle": "rgb(var(--text-subtle-rgb) / <alpha-value>)",
        "text-hover": "rgb(var(--text-rgb) / <alpha-value>)",
      },
    },
  },
  plugins: [flowbiteReact],
};
