import { CircularProgress, Box } from "@mui/material";

function Loader({ size = 80, color = "primary", fullScreen = false }) {
  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: fullScreen ? "100vh" : "auto", // Ajusta se for fullScreen
        width: "100%",
      }}
    >
      <CircularProgress
        color={color}
        size={size}
        aria-label="Carregando..." // Acessibilidade
      />
    </Box>
  );
}

export default Loader;
