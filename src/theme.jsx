import { createTheme } from "@mui/material/styles";

const theme = createTheme({
  palette: {
    primary: { main: "#0A84FF" }, // Azul elétrico
    secondary: { main: "#00D4FF" }, // Ciano Neon
    background: {
      default: "#121212", // Preto fosco
      paper: "#1E1E2E", // Azul escuro profundo
    },
    text: { primary: "#E0E0E0", secondary: "#A0A0A0" }, // Cinza claro
  },
  typography: {
    fontFamily: "Poppins, sans-serif",
    h1: { fontFamily: "Orbitron, sans-serif", fontSize: "2.5rem", fontWeight: 700 },
    h2: { fontFamily: "Orbitron, sans-serif", fontSize: "2rem", fontWeight: 600 },
    h3: { fontFamily: "Poppins, sans-serif", fontSize: "1.5rem", fontWeight: 500 },
    body1: { fontSize: "1rem", fontWeight: 400 },
    button: { fontFamily: "Poppins, sans-serif", fontWeight: 600 },
  },
  spacing: 8, // Define espaçamentos em múltiplos de 8px
  shape: { borderRadius: 12 }, // Borda mais arredondada
});

export default theme;
