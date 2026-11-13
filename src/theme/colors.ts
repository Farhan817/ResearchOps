export const lightTheme = {
  background: "#f8fafc",
  foreground: "#0f172a",

  surface: {
    DEFAULT: "#ffffff",
    secondary: "#f1f5f9",
    elevated: "#ffffff",
  },

  text: {
    primary: "#0f172a",
    secondary: "#475569",
    muted: "#94a3b8",
    inverse: "#ffffff",
  },

  border: {
    DEFAULT: "#e2e8f0",
    strong: "#cbd5e1",
  },

  brand: {
    primary: "#4f46e5",
    primaryHover: "#4338ca",
    accent: "#0d9488",
  },

  status: {
    success: "#16a34a",
    warning: "#d97706",
    danger: "#dc2626",
    info: "#0284c7",
  },
} as const;

export const darkTheme = {
  background: "#0f172a",
  foreground: "#f8fafc",

  surface: {
    DEFAULT: "#1e293b",
    secondary: "#334155",
    elevated: "#1e293b",
  },

  text: {
    primary: "#f8fafc",
    secondary: "#cbd5e1",
    muted: "#94a3b8",
    inverse: "#0f172a",
  },

  border: {
    DEFAULT: "#334155",
    strong: "#475569",
  },

  brand: {
    primary: "#818cf8",
    primaryHover: "#a5b4fc",
    accent: "#2dd4bf",
  },

  status: {
    success: "#4ade80",
    warning: "#fbbf24",
    danger: "#f87171",
    info: "#38bdf8",
  },
} as const;
