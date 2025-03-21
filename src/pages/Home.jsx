import { Container, Typography, Box, Button } from "@mui/material";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const Home = () => {
  return (
    <Container
      sx={{
        textAlign: "center",
        minHeight: "100vh", // Garante que o container ocupe a tela toda
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        p: 3,
      }}
    >
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <Typography variant="h3" color="primary" gutterBottom>
          Olá, eu sou João! 👋
        </Typography>
        <Typography variant="h5" color="textSecondary" paragraph>
          Desenvolvedor apaixonado por tecnologia e inovação. 🚀
        </Typography>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.7, delay: 0.3 }}
      >
        <Button
          variant="contained"
          color="primary"
          size="large"
          component={Link}
          to="/projects"
          sx={{ mt: 2 }}
        >
          Ver Meus Projetos
        </Button>
      </motion.div>
    </Container>
  );
};

export default Home;
