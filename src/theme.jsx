import { createTheme } from "@mui/material/styles";

const createAppTheme = (mode = "dark") =>
  createTheme({
    palette: {
      mode,
      primary: { main: mode === "dark" ? "#4DA3FF" : "#086AD8" },
      secondary: { main: mode === "dark" ? "#35D6ED" : "#008AA3" },
      background: {
        default: mode === "dark" ? "#0B0F17" : "#F4F7FB",
        paper: mode === "dark" ? "#121925" : "#FFFFFF",
      },
      text: {
        primary: mode === "dark" ? "#F2F6FC" : "#142033",
        secondary: mode === "dark" ? "#AEBACB" : "#536176",
      },
    },
    typography: {
      fontFamily: "Poppins, sans-serif",
      h1: { fontSize: "clamp(2.5rem, 6vw, 4.8rem)", fontWeight: 700 },
      h2: {
        fontSize: "clamp(2rem, 4vw, 3.25rem)",
        fontWeight: 700,
      },
      h3: {
        fontFamily: "Poppins, sans-serif",
        fontSize: "clamp(1.6rem, 3vw, 2.25rem)",
        fontWeight: 700,
      },
      body1: { fontSize: "1rem", fontWeight: 400 },
      button: { fontWeight: 600, textTransform: "none" },
    },
    spacing: 8,
    shape: { borderRadius: 16 },
    components: {
      MuiButton: {
        styleOverrides: {
          root: { minHeight: 44, borderRadius: 12, paddingInline: 20 },
        },
      },
      MuiIconButton: {
        styleOverrides: { root: { minWidth: 44, minHeight: 44 } },
      },
      MuiCssBaseline: {
        styleOverrides: {
          "*:focus-visible": {
            outline: "3px solid #35D6ED",
            outlineOffset: 3,
          },
        },
      },
    },
  });

export default createAppTheme;
