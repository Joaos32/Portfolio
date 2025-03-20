// src/components/Footer.jsx
import { Box, Container, Typography, IconButton } from '@mui/material';
import { FaLinkedin, FaGithub, FaEnvelope } from 'react-icons/fa';

const Footer = () => {
  return (
    <Box
      sx={{
        py: 3,
        px: 2,
        backgroundColor: 'black',
        color: 'white',
        textAlign: 'center'
      }}
    >
      <Container>
        <Typography variant="body2">© {new Date().getFullYear()} João</Typography>
        <Box mt={1} sx={{ display: 'flex', justifyContent: 'center', gap: 2 }}>
          <IconButton href="https://www.linkedin.com/in/joaovss/" target="_blank" color="inherit">
            <FaLinkedin size={24} />
          </IconButton>
          <IconButton href="https://github.com/joaovitor3255" target="_blank" color="inherit">
            <FaGithub size={24} />
          </IconButton>
          <IconButton href="mailto:joaovitor3255@gmail.com" color="inherit">
            <FaEnvelope size={24} />
          </IconButton>
        </Box>
      </Container>
    </Box>
  );
};

export default Footer;
