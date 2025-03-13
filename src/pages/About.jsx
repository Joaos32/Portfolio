import { Container, Typography, Box, Avatar, Divider } from '@mui/material';
import { motion } from 'framer-motion';

function About() {
  return (
    <Container sx={{ mt: 8, textAlign: 'center' }}>
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <Avatar
          src="https://via.placeholder.com/150"
          alt="João"
          sx={{ width: 120, height: 120, margin: 'auto', mb: 2 }}
        />
        <Typography variant="h4" color="primary" gutterBottom>
          Sobre Mim
        </Typography>
        <Typography variant="body1" color="textSecondary" paragraph>
          Olá! Meu nome é João e sou um desenvolvedor apaixonado por tecnologia e inovação.
          Tenho experiência em **React, FastAPI, PostgreSQL e desenvolvimento de APIs**.
          Meu objetivo é criar soluções eficientes e impactantes que resolvam problemas reais.
        </Typography>
      </motion.div>

      <Divider sx={{ my: 4 }} />

      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.7, delay: 0.3 }}
      >
        <Typography variant="h5" color="secondary" gutterBottom>
          💡 Habilidades e Tecnologias:
        </Typography>
        <Typography variant="body1" color="textSecondary">
          ✅ React, React Native, FastAPI, PostgreSQL  
          ✅ Material UI, Mantine, Framer Motion  
          ✅ Desenvolvimento de APIs e integração de sistemas  
          ✅ Projetos Full Stack modernos e eficientes  
        </Typography>
      </motion.div>
    </Container>
  );
}

export default About;
