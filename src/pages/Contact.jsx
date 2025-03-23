import { useEffect, useState } from "react";
import {
  Container,
  Typography,
  TextField,
  Button,
  Box,
  Link,
  Snackbar,
  Alert,
} from "@mui/material";
import { GitHub, LinkedIn, Email } from "@mui/icons-material";
import { motion } from "framer-motion";
import emailjs from "@emailjs/browser"; // Importando EmailJS

function Contact() {
  useEffect(() => {
    document.title = "Contato | Portfólio de João Silva";
  }, []);

  // Estados do formulário
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [loading, setLoading] = useState(false);
  const [alert, setAlert] = useState({ open: false, type: "success", message: "" });

  // Função para capturar os valores dos inputs
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // Função para enviar o formulário
  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    // Configurar os dados para o EmailJS
    const templateParams = {
      from_name: formData.name,
      from_email: formData.email,
      message: formData.message,
    };

    try {
      await emailjs.send(
        "service_rl34fr3", // Substitua pelo seu Service ID do EmailJS
        "template_l6c1z9y", // Substitua pelo seu Template ID do EmailJS
        templateParams,
        "AwbyDAAgk-_7dGnyN" // Substitua pela sua Public Key do EmailJS
      );

      setAlert({ open: true, type: "success", message: "Mensagem enviada com sucesso!" });
      setFormData({ name: "", email: "", message: "" }); // Limpa o formulário
    } catch (error) {
      console.error("Erro ao enviar mensagem:", error);
      setAlert({ open: true, type: "error", message: "Erro ao enviar mensagem. Tente novamente!" });
    } finally {
      setLoading(false);
    }
  };

  return (
    <Container sx={{ mt: 8, textAlign: "center", minHeight: "100vh" }}>
      <motion.div initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
        <Typography variant="h4" color="primary" gutterBottom>
          Contato
        </Typography>
        <Typography variant="body1" color="textSecondary" paragraph>
          Entre em contato comigo para oportunidades ou dúvidas!
        </Typography>
      </motion.div>

      <motion.div initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.7, delay: 0.2 }}>
        <Box
          component="form"
          onSubmit={handleSubmit}
          sx={{ maxWidth: 500, mx: "auto", mt: 3, p: 3, boxShadow: 3, borderRadius: 2, bgcolor: "background.paper" }}
        >
          <TextField fullWidth label="Nome" name="name" variant="outlined" margin="normal" required value={formData.name} onChange={handleChange} />
          <TextField fullWidth label="Email" name="email" variant="outlined" margin="normal" required value={formData.email} onChange={handleChange} />
          <TextField fullWidth label="Mensagem" name="message" variant="outlined" margin="normal" multiline rows={4} required value={formData.message} onChange={handleChange} />
          <Button variant="contained" color="primary" sx={{ mt: 2 }} fullWidth type="submit" disabled={loading}>
            {loading ? "Enviando..." : "Enviar"}
          </Button>
        </Box>
      </motion.div>

      <motion.div initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.7, delay: 0.3 }}>
        <Typography variant="h5" color="secondary" sx={{ mt: 4 }}>
          🌍 Conecte-se comigo:
        </Typography>
        <Box sx={{ mt: 2, display: "flex", justifyContent: "center", gap: 2 }}>
          <Link href="https://github.com/Joaos32" target="_blank"><GitHub fontSize="large" sx={{ color: "black" }} /></Link>
          <Link href="https://www.linkedin.com/in/joao-vitor-silva-santos/" target="_blank"><LinkedIn fontSize="large" sx={{ color: "#0A66C2" }} /></Link>
          <Link href="mailto:joaovitor3255silva@email.com"><Email fontSize="large" sx={{ color: "red" }} /></Link>
        </Box>
      </motion.div>

      {/* Exibir alerta de sucesso ou erro */}
      <Snackbar open={alert.open} autoHideDuration={4000} onClose={() => setAlert({ ...alert, open: false })}>
        <Alert severity={alert.type} onClose={() => setAlert({ ...alert, open: false })}>
          {alert.message}
        </Alert>
      </Snackbar>
    </Container>
  );
}

export default Contact;
