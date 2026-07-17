import { useEffect } from "react";
import {
  Container,
  Typography,
  Box,
  Avatar,
  Chip,
  Paper,
  Stack,
} from "@mui/material";
import {
  AutoAwesome,
  ChatOutlined,
  Code,
  GroupsOutlined,
  LocationOnOutlined,
  Psychology,
  SchoolOutlined,
  TaskAlt,
  WorkOutline,
} from "@mui/icons-material";
import { motion, useReducedMotion } from "framer-motion";
import avatar from "../assets/joao-vitor-portfolio-web.jpg";

const softSkills = [
  { name: "Trabalho em equipe", icon: <GroupsOutlined /> },
  { name: "Comunicação", icon: <ChatOutlined /> },
  { name: "Resolução de problemas", icon: <Psychology /> },
  { name: "Organização", icon: <TaskAlt /> },
  { name: "Proatividade", icon: <AutoAwesome /> },
];

const mainHardSkills = [
  "Java",
  "Spring Boot",
  "React",
  "React Native",
  "Python",
  "FastAPI",
  "PostgreSQL",
];

const profileFacts = [
  { label: "Full Stack na Nitrolux", icon: <WorkOutline /> },
  { label: "Recife, PE", icon: <LocationOnOutlined /> },
  { label: "Engenharia de Software · 2027.1", icon: <SchoolOutlined /> },
];

const About = () => {
  const reduceMotion = useReducedMotion();

  useEffect(() => {
    document.title = "Sobre | Portfólio de João Vitor";
  }, []);

  return (
    <Container
      maxWidth="lg"
      sx={{ width: "100%", py: { xs: 6, md: 10 }, px: { xs: 2, md: 4 } }}
    >
      <motion.div
        initial={reduceMotion ? false : { opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <Paper
          elevation={0}
          sx={{
            display: "grid",
            gridTemplateColumns: { xs: "1fr", md: "220px 1fr" },
            alignItems: "center",
            gap: { xs: 3, md: 6 },
            p: { xs: 3, md: 5 },
            mb: 4,
            border: "1px solid",
            borderColor: "divider",
            background:
              "linear-gradient(135deg, rgba(10,132,255,0.12), rgba(0,212,255,0.03))",
          }}
        >
          <Avatar
            src={avatar}
            alt="João Vitor"
            variant="rounded"
            sx={{
              width: { xs: 190, md: 220 },
              height: { xs: 220, md: 260 },
              mx: "auto",
              border: "4px solid",
              borderColor: "primary.main",
              boxShadow: "0 12px 35px rgba(0,0,0,0.35)",
              bgcolor: "background.paper",
              "& img": {
                objectFit: "cover",
                objectPosition: "center 32%",
              },
            }}
          />
          <Box sx={{ textAlign: { xs: "center", md: "left" } }}>
            <Typography
              component="span"
              color="secondary.main"
              fontWeight={600}
              sx={{ letterSpacing: 1.5, textTransform: "uppercase" }}
            >
              Desenvolvedor Full Stack
            </Typography>
            <Typography
              variant="h3"
              component="h1"
              color="text.primary"
              fontWeight={700}
              sx={{ mt: 1, mb: 2, fontSize: { xs: "2rem", md: "2.6rem" } }}
            >
              Olá, eu sou João Vitor
            </Typography>
            <Typography
              color="text.secondary"
              sx={{ maxWidth: 760, fontSize: { xs: "1rem", md: "1.1rem" }, lineHeight: 1.8 }}
            >
              Desenvolvo aplicações web, APIs REST e integrações entre sistemas
              com Java, Spring Boot, React, React Native e Python. Minha atuação
              combina desenvolvimento de soluções escaláveis e seguras com
              experiência em JWT, microsserviços, PostgreSQL e infraestrutura
              de TI, sempre com visão analítica e foco na resolução de problemas.
            </Typography>
            <Stack
              direction={{ xs: "column", sm: "row" }}
              useFlexGap
              flexWrap="wrap"
              spacing={1}
              sx={{ mt: 3, alignItems: { xs: "center", md: "flex-start" } }}
            >
              {profileFacts.map((fact) => (
                <Chip
                  key={fact.label}
                  icon={fact.icon}
                  label={fact.label}
                  variant="outlined"
                  sx={{ bgcolor: "rgba(255,255,255,0.03)" }}
                />
              ))}
            </Stack>
          </Box>
        </Paper>
      </motion.div>

      <motion.div
        initial={reduceMotion ? false : { opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.15 }}
      >
          <Box sx={{ display: "grid", gridTemplateColumns: { xs: "1fr", md: "1fr 1fr" }, gap: 3 }}>
            <Paper
              elevation={0}
              sx={{ p: { xs: 3, md: 4 }, border: "1px solid", borderColor: "divider" }}
            >
              <Typography variant="h5" fontWeight={700} color="primary.main" sx={{ mb: 1 }}>
                Soft skills
              </Typography>
              <Typography color="text.secondary" sx={{ mb: 3 }}>
                Competências comportamentais que aplico no trabalho e na evolução
                dos projetos.
              </Typography>
              <Stack spacing={1.5}>
                {softSkills.map((skill) => (
                  <Box
                    key={skill.name}
                    sx={{ display: "flex", alignItems: "center", gap: 1.5, p: 1.5, borderRadius: 2, bgcolor: "action.hover" }}
                  >
                    <Box sx={{ color: "primary.main", display: "flex" }}>{skill.icon}</Box>
                    <Typography fontWeight={600}>{skill.name}</Typography>
                  </Box>
                ))}
              </Stack>
            </Paper>

            <Paper
              elevation={0}
              sx={{ p: { xs: 3, md: 4 }, border: "1px solid", borderColor: "divider" }}
            >
              <Typography variant="h5" fontWeight={700} color="secondary.main" sx={{ mb: 1 }}>
                Hard skills
              </Typography>
              <Typography color="text.secondary" sx={{ mb: 3 }}>
                Tecnologias centrais que utilizo no desenvolvimento das minhas
                aplicações.
              </Typography>
              <Box sx={{ display: "flex", flexWrap: "wrap", gap: 1.25 }}>
                {mainHardSkills.map((skill) => (
                <Chip
                  key={skill}
                  icon={<Code />}
                  label={skill}
                  color="secondary"
                  variant="outlined"
                    sx={{ height: 40, px: 0.75, fontSize: "0.95rem", fontWeight: 600 }}
                />
              ))}
              </Box>
            </Paper>
          </Box>
      </motion.div>
    </Container>
  );
};

export default About;
