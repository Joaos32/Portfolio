import { Box, Container, Typography, IconButton } from '@mui/material';
import { FaLinkedin, FaGithub, FaEnvelope } from 'react-icons/fa';

const Footer = () => {
  return (
    <Box
      component="footer"
      sx={{
        py: 3,
        px: 2,
        bgcolor: 'primary.dark', // Seguindo o tema principal
        color: 'white',
        textAlign: 'center',
      }}
    >
      <Container>
        <Typography variant="body2" sx={{ fontSize: '0.9rem' }}>
          © {new Date().getFullYear()} João Vitor - Todos os direitos reservados.
        </Typography>
        <Box mt={1} sx={{ display: 'flex', justifyContent: 'center', gap: 2 }}>
          <IconButton 
            href="https://www.linkedin.com/in/joao-vitor-silva-santos/" 
            target="_blank" 
            color="inherit" 
            aria-label="LinkedIn de João Vitor"
          >
            <FaLinkedin size={24} />
          </IconButton>
          <IconButton 
            href="https://github.com/joaos32" 
            target="_blank" 
            color="inherit" 
            aria-label="GitHub de João Vitor"
          >
            <FaGithub size={24} />
          </IconButton>
          <IconButton 
            href="mailto:joaovitor3255silva@gmail.com" 
            color="inherit" 
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
