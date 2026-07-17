import { useEffect, useState } from "react";
import {
  Alert,
  Box,
  Button,
  CircularProgress,
  Container,
  IconButton,
  Link,
  Paper,
  Snackbar,
  Stack,
  TextField,
  Typography,
} from "@mui/material";
import { Email, GitHub, LinkedIn, Send } from "@mui/icons-material";
import { motion, useReducedMotion } from "framer-motion";
import emailjs from "@emailjs/browser";

const emailConfig = {
  serviceId: import.meta.env.VITE_EMAILJS_SERVICE_ID,
  templateId: import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
  publicKey: import.meta.env.VITE_EMAILJS_PUBLIC_KEY,
};

const contactLinks = [
  { label: "GitHub", href: "https://github.com/Joaos32", icon: <GitHub /> },
  { label: "LinkedIn", href: "https://www.linkedin.com/in/joao-vitor-silva-santos/", icon: <LinkedIn /> },
  { label: "E-mail", href: "mailto:joaovitorsilvasantos3255@gmail.com", icon: <Email /> },
];

function Contact() {
  const reduceMotion = useReducedMotion();
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [loading, setLoading] = useState(false);
  const [alert, setAlert] = useState({ open: false, type: "success", message: "" });

  useEffect(() => {
    document.title = "Contato | Portfólio de João Vitor";
  }, []);

  const handleChange = (event) => {
    setFormData((current) => ({ ...current, [event.target.name]: event.target.value }));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (!emailConfig.serviceId || !emailConfig.templateId || !emailConfig.publicKey) {
      setAlert({ open: true, type: "error", message: "O formulário ainda não foi configurado. Você pode entrar em contato por e-mail." });
      return;
    }

    setLoading(true);
    try {
      await emailjs.send(
        emailConfig.serviceId,
        emailConfig.templateId,
        { from_name: formData.name, from_email: formData.email, message: formData.message },
        emailConfig.publicKey
      );
      setAlert({ open: true, type: "success", message: "Mensagem enviada com sucesso!" });
      setFormData({ name: "", email: "", message: "" });
    } catch (error) {
      console.error("Erro ao enviar mensagem:", error);
      setAlert({ open: true, type: "error", message: "Não foi possível enviar agora. Tente novamente ou use o e-mail." });
    } finally {
      setLoading(false);
    }
  };

  return (
    <Container maxWidth="lg" sx={{ py: { xs: 7, md: 10 } }}>
      <motion.div initial={reduceMotion ? false : { opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
        <Box sx={{ display: "grid", gridTemplateColumns: { xs: "1fr", md: "0.85fr 1.15fr" }, gap: { xs: 4, md: 7 }, alignItems: "start" }}>
          <Box sx={{ pt: { md: 3 } }}>
            <Typography color="secondary.main" fontWeight={600} sx={{ letterSpacing: 1.5, textTransform: "uppercase", mb: 1 }}>
              Vamos conversar
            </Typography>
            <Typography component="h1" variant="h2" sx={{ mb: 2 }}>
              Tem uma oportunidade ou projeto em mente?
            </Typography>
            <Typography color="text.secondary" sx={{ fontSize: "1.08rem", lineHeight: 1.8, mb: 4 }}>
              Estou disponível para oportunidades em desenvolvimento Full Stack,
              colaboração técnica e novos desafios. Conte um pouco sobre o que
              você precisa e retornarei assim que possível.
            </Typography>

            <Link href="mailto:joaovitorsilvasantos3255@gmail.com" underline="hover" color="text.primary" sx={{ display: "inline-flex", alignItems: "center", gap: 1, fontWeight: 600 }}>
              <Email color="primary" /> joaovitorsilvasantos3255@gmail.com
            </Link>
            <Stack direction="row" spacing={1} sx={{ mt: 3 }}>
              {contactLinks.map(({ label, href, icon }) => (
                <IconButton key={label} href={href} target={href.startsWith("http") ? "_blank" : undefined} rel="noreferrer" aria-label={label} sx={{ border: "1px solid", borderColor: "divider" }}>
                  {icon}
                </IconButton>
              ))}
            </Stack>
          </Box>

          <Paper component="form" onSubmit={handleSubmit} elevation={0} sx={{ p: { xs: 3, md: 4 }, border: "1px solid", borderColor: "divider" }}>
            <Typography variant="h5" fontWeight={700} sx={{ mb: 0.5 }}>
              Envie uma mensagem
            </Typography>
            <Typography color="text.secondary" sx={{ mb: 2 }}>
              Preencha os campos abaixo para iniciar uma conversa.
            </Typography>
            <TextField fullWidth label="Nome" name="name" margin="normal" required autoComplete="name" value={formData.name} onChange={handleChange} />
            <TextField fullWidth label="E-mail" name="email" type="email" margin="normal" required autoComplete="email" value={formData.email} onChange={handleChange} />
            <TextField fullWidth label="Como posso ajudar?" name="message" margin="normal" multiline minRows={5} required value={formData.message} onChange={handleChange} />
            <Button type="submit" variant="contained" size="large" fullWidth disabled={loading} endIcon={loading ? <CircularProgress size={18} color="inherit" /> : <Send />} sx={{ mt: 2 }}>
              {loading ? "Enviando" : "Enviar mensagem"}
            </Button>
          </Paper>
        </Box>
      </motion.div>

      <Snackbar open={alert.open} autoHideDuration={5000} onClose={() => setAlert((current) => ({ ...current, open: false }))}>
        <Alert severity={alert.type} variant="filled" onClose={() => setAlert((current) => ({ ...current, open: false }))}>
          {alert.message}
        </Alert>
      </Snackbar>
    </Container>
  );
}

export default Contact;
