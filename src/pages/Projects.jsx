// src/pages/Projects.jsx
import { Container, Grid, Typography } from '@mui/material';
import ProjectCard from '../components/ProjectCard';

const projects = [
  { title: "ChefCasa", description: "App para chefs", image: "https://thumbs.dreamstime.com/z/ícone-do-chapéu-de-chef-isolado-em-fundo-branco-da-coleção-cozinha-moda-e-símbolo-moderno-para-o-logotipo-web-app-ui-sinal-205127805.jpg", link: "https://github.com/Joaos32/ChefCasa" },
  { title: "Amigo Secreto", description: "Sorteios interativos", image: "https://secretsantaonline.com/assets/frontend/img/blog/ef360f61fd5807de916b59b5a9a789f4.jpg", link: "https://github.com/Joaos32/amigo-secreto" },
  { title: "Projetos Python", description: "Projetos Básico de Python", image: "https://i0.wp.com/junilearning.com/wp-content/uploads/2020/06/python-programming-language.webp?resize=800%2C800&ssl=1", link: "https://github.com/Joaos32/Projetos-Python" }
];

function Projects() {
  return (
    <Container>
      <Typography variant="h3" color="primary" textAlign="center" mt={5} mb={3}>
        Meus Projetos
      </Typography>
      <Grid container spacing={2} justifyContent="center">
        {projects.map((project, index) => (
          <Grid item xs={12} sm={6} md={4} key={index}>
            <ProjectCard {...project} />
          </Grid>
        ))}
      </Grid>
    </Container>
  );
}

export default Projects;
