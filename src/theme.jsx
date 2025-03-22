import { createTheme } from "@mui/material/styles";

const theme = createTheme({
  palette: {
    primary: { main: "#0A84FF" }, 
    secondary: { main: "#00D4FF" }, 
    background: {
      default: "#121212", 
      paper: "#1E1E2E", 
    },
    text: { primary: "#E0E0E0", secondary: "#A0A0A0" }, 
  },
  typography: {
    fontFamily: "Poppins, sans-serif",
    h1: { fontFamily: "Orbitron, sans-serif", fontSize: "2.5rem", fontWeight: 700 },
    h2: { fontFamily: "Orbitron, sans-serif", fontSize: "2rem", fontWeight: 600 },
    h3: { fontFamily: "Poppins, sans-serif", fontSize: "1.5rem", fontWeight: 500 },
    body1: { fontSize: "1rem", fontWeight: 400 },
    button: { fontFamily: "Poppins, sans-serif", fontWeight: 600 },
  },
  spacing: 8, 
  shape: { borderRadius: 12 }, 
});

export default theme;
