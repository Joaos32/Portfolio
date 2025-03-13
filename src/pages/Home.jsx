import { Container, Typography, Box, Button } from '@mui/material';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

function Home() {
  return (
    <Container sx={{ textAlign: 'center', mt: 8 }}>
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
        <Button variant="contained" color="primary" size="large" component={Link} to="/projects">
          Ver Meus Projetos
        </Button>
      </motion.div>
    </Container>
  );
}

export default Home;
