import { useState, useEffect } from "react";
import { Container, Typography, Button, Box } from "@mui/material";
import { motion } from "framer-motion";
import { TypeAnimation } from "react-type-animation";
import { FaArrowRight } from "react-icons/fa";

const Home = () => {
  const [textVisible, setTextVisible] = useState(false);

  useEffect(() => {
    document.title = "Início | Portfólio de João Vitor";

    setTimeout(() => {
      setTextVisible(true);
    }, 1000);
  }, []);

  return (
    <Container
      maxWidth="lg"
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        textAlign: "center",
        minHeight: "100vh",
        p: 3,
      }}
    >
      {/* Título animado */}
      <motion.div
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        <Typography variant="h3" fontWeight="bold" color="primary" gutterBottom>
          Olá, eu sou{" "}
          <span style={{ color: "#61DBFB" }}>
            <TypeAnimation
              sequence={["João Vitor", 1500, "um Desenvolvedor!", 1500]}
              wrapper="span"
              repeat={Infinity}
            />
          </span>
        </Typography>
      </motion.div>

      {/* Descrição com efeito de entrada */}
      {textVisible && (
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.3 }}
        >
          <Typography variant="h6" color="textSecondary" sx={{ maxWidth: "600px" }}>
            Desenvolvedor Full Stack apaixonado por tecnologia, inovação e código limpo. Vamos criar algo incrível juntos?
          </Typography>
        </motion.div>
      )}

      {/* Botões animados */}
      <Box sx={{ mt: 4, display: "flex", gap: 2 }}>
        <motion.div
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          transition={{ duration: 0.3 }}
        >
          <Button
            variant="contained"
            color="primary"
            size="large"
            href="/projects"
            sx={{ px: 4, py: 1, fontWeight: "bold", display: "flex", alignItems: "center" }}
          >
            Meus Projetos <FaArrowRight style={{ marginLeft: "8px" }} />
          </Button>
        </motion.div>

        <motion.div
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          transition={{ duration: 0.3 }}
        >
          <Button
            variant="outlined"
            color="primary"
            size="large"
            href="/contact"
            sx={{ px: 4, py: 1, fontWeight: "bold" }}
          >
            Contato
          </Button>
        </motion.div>
      </Box>

      {/* Efeito de fundo animado */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.2 }}
        transition={{ duration: 2 }}
        style={{
          position: "absolute",
          bottom: "10%",
          left: "50%",
          transform: "translateX(-50%)",
          width: "300px",
          height: "300px",
          background: "radial-gradient(circle, rgba(97,219,251,0.3) 0%, rgba(0,0,0,0) 70%)",
          borderRadius: "50%",
          zIndex: -1,
        }}
      />
    </Container>
  );
};

export default Home;
