import { Container, Typography, Button, Box } from '@mui/material';
import { motion } from 'framer-motion';

function Home() {
  return (
    <Container>
      <Box 
        component={motion.div} 
        initial={{ opacity: 0, y: -50 }} 
        animate={{ opacity: 1, y: 0 }} 
        transition={{ duration: 0.8 }}
        textAlign="center"
        mt={5}
      >
        <Typography variant="h3" color="primary">
          Olá, eu sou João! 🚀
        </Typography>
        <Typography variant="h5" mt={2}>
          Desenvolvedor apaixonado por tecnologia e inovação.
        </Typography>
        <Button 
          component={motion.a} 
          href="/projects" 
          variant="contained" 
          color="primary" 
          sx={{ mt: 3 }}
          whileHover={{ scale: 1.1 }}
        >
          Ver Meus Projetos
        </Button>
      </Box>
    </Container>
  );
}

export default Home;
