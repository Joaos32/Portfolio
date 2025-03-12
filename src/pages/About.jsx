import { Container, Typography, Box } from '@mui/material';

function About() {
  return (
    <Container>
      <Box textAlign="center" mt={5}>
        <Typography variant="h3" color="primary">
          Sobre Mim
        </Typography>
        <Typography variant="h5" color="textSecondary" mt={2}>
          Sou um desenvolvedor focado em criar soluções inovadoras.
        </Typography>
      </Box>
    </Container>
  );
}

export default About;