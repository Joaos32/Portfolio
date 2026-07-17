import { Box, Container, IconButton, Stack, Typography } from "@mui/material";
import { GitHub, LinkedIn, MailOutline } from "@mui/icons-material";

const socialLinks = [
  { label: "LinkedIn de João Vitor", href: "https://www.linkedin.com/in/joao-vitor-silva-santos/", icon: <LinkedIn /> },
  { label: "GitHub de João Vitor", href: "https://github.com/joaos32", icon: <GitHub /> },
  { label: "Enviar e-mail para João Vitor", href: "mailto:joaovitorsilvasantos3255@gmail.com", icon: <MailOutline /> },
];

function Footer() {
  return (
    <Box component="footer" sx={{ borderTop: "1px solid", borderColor: "divider", py: 3 }}>
      <Container maxWidth="lg">
        <Stack direction={{ xs: "column", sm: "row" }} alignItems="center" justifyContent="space-between" spacing={2}>
          <Box>
            <Typography fontWeight={700}>João Vitor</Typography>
            <Typography variant="body2" color="text.secondary">
              Desenvolvedor Full Stack · © {new Date().getFullYear()}
            </Typography>
          </Box>
          <Stack direction="row" spacing={0.5}>
            {socialLinks.map(({ label, href, icon }) => (
              <IconButton key={label} href={href} target={href.startsWith("http") ? "_blank" : undefined} rel="noreferrer" aria-label={label} color="inherit">
                {icon}
              </IconButton>
            ))}
          </Stack>
        </Stack>
      </Container>
    </Box>
  );
}

export default Footer;
