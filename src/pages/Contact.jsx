import { Container, Typography, Box } from '@mui/material';

function Contact() {
  return (
    <Container>
      <Box textAlign="center" mt={5}>
        <Typography variant="h3" color="primary">
          Contato
        </Typography>
        <Typography variant="h5" color="textSecondary" mt={2}>
          Entre em contato comigo para colaborações e oportunidades!
        </Typography>
      </Box>
    </Container>
  );
}

export default Contact;
