import { darkTheme, lightTheme } from "./colors";
import { themeTokens } from "./tokens";

export { themeTokens, lightTheme, darkTheme };

export type AppTheme = typeof lightTheme;

export type ThemeMode = "light" | "dark";

export const themes = {
  light: lightTheme,
  dark: darkTheme,
} as const;

// Extend the base theme with product-specific properties.
export const createTheme = <T extends object>(overrides: T) => ({
  ...lightTheme,
  ...overrides,
});
