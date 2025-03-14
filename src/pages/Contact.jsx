import { Container, Typography, TextField, Button, Box, Link } from '@mui/material';
import { motion } from 'framer-motion';
import { GitHub, LinkedIn, Email } from '@mui/icons-material';

function Contact() {
  return (
    <Container sx={{ mt: 8, textAlign: 'center' }}>
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <Typography variant="h4" color="primary" gutterBottom>
          Contato
        </Typography>
        <Typography variant="body1" color="textSecondary" paragraph>
          Entre em contato comigo para oportunidades ou dúvidas!
        </Typography>
      </motion.div>

      <Box component="form" sx={{ maxWidth: 500, mx: 'auto', mt: 3 }}>
        <TextField fullWidth label="Nome" variant="outlined" margin="normal" required />
        <TextField fullWidth label="Email" variant="outlined" margin="normal" required />
        <TextField fullWidth label="Mensagem" variant="outlined" margin="normal" multiline rows={4} required />
        <Button variant="contained" color="primary" sx={{ mt: 2 }} fullWidth>
          Enviar
        </Button>
      </Box>

      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.7, delay: 0.3 }}
      >
        <Typography variant="h5" color="secondary" sx={{ mt: 4 }}>
          🌍 Conecte-se comigo:
        </Typography>
        <Box sx={{ mt: 2 }}>
          <Link href="https://github.com/Joaos32" target="_blank" sx={{ mx: 1 }}>
            <GitHub fontSize="large" />
          </Link>
          <Link href="https://www.linkedin.com/in/joãovss/" target="_blank" sx={{ mx: 1 }}>
            <LinkedIn fontSize="large" />
          </Link>
          <Link href="mailto:joaovitor3255silva@email.com" sx={{ mx: 1 }}>
            <Email fontSize="large" />
          </Link>
        </Box>
      </motion.div>
    </Container>
  );
}

export default Contact;
