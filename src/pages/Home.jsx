import { useEffect } from "react";
import { Box, Button, Chip, Container, Stack, Typography } from "@mui/material";
import { ArrowForward, MailOutline, PersonOutline } from "@mui/icons-material";
import { motion, useReducedMotion } from "framer-motion";
import { Link as RouterLink } from "react-router-dom";

const highlights = ["Aplicações web", "APIs", "Soluções orientadas a dados"];

function Home() {
  const reduceMotion = useReducedMotion();

  useEffect(() => {
    document.title = "João Vitor | Desenvolvedor Full Stack";
  }, []);

  return (
    <Box
      sx={{
        position: "relative",
        overflow: "hidden",
        minHeight: { xs: "calc(100vh - 56px)", md: "calc(100vh - 64px)" },
        display: "flex",
        alignItems: "center",
        background:
          "radial-gradient(circle at 75% 35%, rgba(53,214,237,0.12), transparent 30%), radial-gradient(circle at 20% 70%, rgba(77,163,255,0.14), transparent 32%)",
      }}
    >
      <Container maxWidth="lg" sx={{ py: { xs: 8, md: 12 } }}>
        <motion.div
          initial={reduceMotion ? false : { opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <Typography
            component="p"
            color="secondary.main"
            fontWeight={600}
            sx={{ letterSpacing: 2, textTransform: "uppercase", mb: 2 }}
          >
            Desenvolvedor Full Stack
          </Typography>
          <Typography
            component="h1"
            variant="h1"
            sx={{ maxWidth: 900, lineHeight: 1.08 }}
          >
            Transformo ideias em produtos digitais que geram valor real.
          </Typography>
          <Typography
            color="text.secondary"
            sx={{
              maxWidth: 720,
              mt: 3,
              fontSize: { xs: "1.05rem", md: "1.25rem" },
              lineHeight: 1.8,
            }}
          >
            Sou João Vitor. Construo experiências web, APIs e soluções de
            software com foco em qualidade, organização e evolução contínua.
          </Typography>

          <Stack
            direction="row"
            useFlexGap
            flexWrap="wrap"
            spacing={1}
            sx={{ mt: 3 }}
          >
            {highlights.map((highlight) => (
              <Chip
                key={highlight}
                label={highlight}
                variant="outlined"
                color="secondary"
              />
            ))}
          </Stack>

          <Stack
            direction={{ xs: "column", sm: "row" }}
            spacing={2}
            sx={{ mt: 5, maxWidth: { xs: 420, sm: "none" } }}
          >
            <Button
              component={RouterLink}
              to="/projects"
              variant="contained"
              size="large"
              endIcon={<ArrowForward />}
            >
              Ver projetos
            </Button>
            <Button
              component={RouterLink}
              to="/contact"
              variant="outlined"
              size="large"
              startIcon={<MailOutline />}
            >
              Entrar em contato
            </Button>
            <Button
              component={RouterLink}
              to="/about"
              variant="text"
              size="large"
              startIcon={<PersonOutline />}
            >
              Conhecer trajetória
            </Button>
          </Stack>
        </motion.div>
      </Container>
    </Box>
  );
}

export default Home;
