// src/components/Footer.jsx
import { Box, Container, Typography, IconButton } from '@mui/material';
import { GitHub, LinkedIn, Email } from '@mui/icons-material';

function Footer() {
  return (
    <Box
      component="footer"
      sx={{
        py: 3,
        px: 2,
        mt: 5,
        backgroundColor: 'primary.dark',
        color: 'white',
        textAlign: 'center',
      }}
    >
      <Container>
        <Typography variant="body1">Desenvolvido por João</Typography>
        <Box mt={1} sx={{ display: 'flex', justifyContent: 'center', gap: 2 }}>
          <IconButton href="https://github.com/Joaos32" target="_blank" color="inherit">
            <GitHub fontSize="large" />
          </IconButton>
          <IconButton href="https://www.linkedin.com/in/joãovss/" target="_blank" color="inherit">
            <LinkedIn fontSize="large" />
          </IconButton>
          <IconButton href="mailto:joaovitor3255silva@gmail.com" color="inherit">
            <Email fontSize="large" />
          </IconButton>
        </Box>
        <Typography variant="caption">© {new Date().getFullYear()} Todos os direitos reservados.</Typography>
      </Container>
    </Box>
  );
}

export default Footer;
