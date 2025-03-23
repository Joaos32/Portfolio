import { useEffect } from "react";
import { Container, Grid, Typography } from "@mui/material";
import ProjectCard from "../components/ProjectCard";

const projects = [
  {
    title: "ChefCasa",
    description: "Aplicativo para contratar chefs de cozinha em casa.",
    technologies: ["React Native", "FastAPI", "PostgreSQL"],
    progress: 35, 
    image:
      "https://thumbs.dreamstime.com/z/ícone-do-chapéu-de-chef-isolado-em-fundo-branco-da-coleção-cozinha-moda-e-símbolo-moderno-para-o-logotipo-web-app-ui-sinal-205127805.jpg",
    link: "https://github.com/Joaos32/ChefCasa",
  },
  {
    title: "Amigo Secreto",
    description: "Plataforma interativa para sorteios de amigo secreto.",
    technologies: ["React", "Mantine UI", "IndexDB"],
    progress: 40, 
    image:
      "https://secretsantaonline.com/assets/frontend/img/blog/ef360f61fd5807de916b59b5a9a789f4.jpg",
    link: "https://github.com/Joaos32/amigo-secreto",
  },
  {
    title: "Projetos Python",
    description: "Coleção de projetos básicos para aprendizado de Python.",
    technologies: ["Python", "Flask", "SQLite"],
    progress: 100, 
    image:
      "https://i0.wp.com/junilearning.com/wp-content/uploads/2020/06/python-programming-language.webp?resize=800%2C800&ssl=1",
    link: "https://github.com/Joaos32/Projetos-Python",
  },
];

function Projects() {
  useEffect(() => {
    document.title = "Meus Projetos | Portfólio de João Silva";
  }, []);

  return (
    <Container sx={{ mt: 5, mb: 5 }}>
      <Typography
        variant="h3"
        color="primary"
        textAlign="center"
        sx={{ fontWeight: "bold", mb: 3 }}
      >
        Meus Projetos
      </Typography>
      <Grid container spacing={3} justifyContent="center" alignItems="stretch">
        {projects.map((project, index) => (
          <Grid
            item
            xs={12}
            sm={6}
            md={4}
            key={index}
            display="flex"
            justifyContent="center"
          >
            <ProjectCard {...project} />
          </Grid>
        ))}
      </Grid>
    </Container>
  );
}

export default Projects;
