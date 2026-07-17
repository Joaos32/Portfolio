import { createContext, useContext } from "react";

export const ThemeModeContext = createContext(undefined);

export function useThemeMode() {
  const context = useContext(ThemeModeContext);

  if (!context) {
    throw new Error(
      "useThemeMode deve ser usado dentro de ThemeProviderComponent"
    );
  }

  return context;
}
