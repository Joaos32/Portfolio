import { useMemo, useState } from "react";
import { ThemeProvider } from "@mui/material/styles";
import { CssBaseline } from "@mui/material";
import createAppTheme from "../theme";
import { ThemeModeContext } from "./themeMode";

export function ThemeProviderComponent({ children }) {
  const [darkMode, setDarkMode] = useState(true);

  const theme = useMemo(
    () => createAppTheme(darkMode ? "dark" : "light"),
    [darkMode]
  );
  const value = useMemo(
    () => ({ darkMode, toggleTheme: () => setDarkMode((current) => !current) }),
    [darkMode]
  );

  return (
    <ThemeModeContext.Provider value={value}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        {children}
      </ThemeProvider>
    </ThemeModeContext.Provider>
  );
}
