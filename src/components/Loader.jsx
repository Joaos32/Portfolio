import { CircularProgress, Box } from "@mui/material";

function Loader({ size = 80, color = "primary", fullScreen = false }) {
  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: fullScreen ? "100vh" : "auto", 
        width: "100%",
      }}
    >
      <CircularProgress
        color={color}
        size={size}
        aria-label="Carregando..." 
      />
    </Box>
  );
}

export default Loader;
