import {
  Box,
  Container,
  Typography,
  IconButton,
  useTheme,
} from "@mui/material";
import { FaLinkedin, FaGithub, FaEnvelope } from "react-icons/fa";

const Footer = () => {
  const currentYear = new Date().getFullYear(); // Evita recalcular a cada render
  const theme = useTheme(); // Pega o tema para responsividade

  return (
    <Box
      component="footer"
      sx={{
        py: 3,
        px: 2,
        bgcolor: "primary.dark",
        color: "white",
        textAlign: "center",
      }}
    >
      <Container>
        <Typography variant="body2" sx={{ fontSize: "0.9rem" }}>
          © {currentYear} João Vitor - Todos os direitos reservados.
        </Typography>
        <Box
          mt={1}
          sx={{
            display: "flex",
            justifyContent: "center",
            gap: theme.spacing(2.5),
          }}
        >
          <IconButton
            href="https://www.linkedin.com/in/joao-vitor-silva-santos/"
            target="_blank"
            sx={{ color: "white" }}
            aria-label="LinkedIn de João Vitor"
          >
            <FaLinkedin size={24} />
          </IconButton>
          <IconButton
            href="https://github.com/joaos32"
            target="_blank"
            sx={{ color: "white" }}
            aria-label="GitHub de João Vitor"
          >
            <FaGithub size={24} />
          </IconButton>
          <IconButton
            href="mailto:joaovitor3255silva@gmail.com"
            sx={{ color: "white" }}
            aria-label="Enviar email para João Vitor"
          >
            <FaEnvelope size={24} />
          </IconButton>
        </Box>
      </Container>
    </Box>
  );
};

export default Footer;
