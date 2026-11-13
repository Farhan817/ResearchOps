export const themeTokens = {
  colors: {
    primary: {
      50: "#eef2ff",
      100: "#e0e7ff",
      200: "#c7d2fe",
      300: "#a5b4fc",
      400: "#818cf8",
      500: "#6366f1",
      600: "#4f46e5",
      700: "#4338ca",
      800: "#3730a3",
      900: "#312e81",
    },

    accent: {
      50: "#f0fdfa",
      100: "#ccfbf1",
      200: "#99f6e4",
      300: "#5eead4",
      400: "#2dd4bf",
      500: "#14b8a6",
      600: "#0d9488",
      700: "#0f766e",
      800: "#115e59",
      900: "#134e4a",
    },

    neutral: {
      50: "#f8fafc",
      100: "#f1f5f9",
      200: "#e2e8f0",
      300: "#cbd5e1",
      400: "#94a3b8",
      500: "#64748b",
      600: "#475569",
      700: "#334155",
      800: "#1e293b",
      900: "#0f172a",
    },

    semantic: {
      success: "#16a34a",
      warning: "#d97706",
      danger: "#dc2626",
      info: "#0284c7",
    },
  },

  typography: {
    fontFamily: {
      sans: "Inter, sans-serif",
      mono: "JetBrains Mono, monospace",
    },
    fontSize: {
      xs: "0.75rem",
      sm: "0.875rem",
      base: "1rem",
      lg: "1.125rem",
      xl: "1.25rem",
      "2xl": "1.5rem",
      "3xl": "1.875rem",
      "4xl": "2.25rem",
    },
  },

  radius: {
    sm: "0.375rem",
    md: "0.625rem",
    lg: "0.875rem",
    xl: "1rem",
    full: "9999px",
  },

  spacing: {
    page: "1.5rem",
    card: "1.25rem",
    section: "2rem",
  },

  shadows: {
    card: "0 1px 3px rgb(15 23 42 / 0.06)",
    dropdown: "0 8px 24px rgb(15 23 42 / 0.10)",
    modal: "0 20px 50px rgb(15 23 42 / 0.15)",
  },
} as const;
