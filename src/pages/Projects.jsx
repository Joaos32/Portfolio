import { useEffect } from "react";
import { Box, Container, Typography } from "@mui/material";
import ProjectCard from "../components/ProjectCard";
import nitroluxSiteImage from "../assets/projects/nitrolux-site.jpg";
import inventoryImage from "../assets/projects/estoque-ti.jpg";
import nitroluxCatalogImage from "../assets/projects/nitrolux-cam.jpg";
import portfolioImage from "../assets/projects/portfolio-site.jpg";

const projects = [
  {
    id: "nitrolux-site",
    title: "Site Nitrolux",
    category: "Projeto profissional · Web",
    description:
      "Site institucional e catálogo digital da Nitrolux, criado para apresentar as linhas de iluminação, facilitar a descoberta de produtos e fortalecer a presença digital da marca.",
    impact:
      "Uma experiência responsiva que conecta conteúdo institucional, portfólio de produtos e canais de atendimento em uma navegação mais clara.",
    technologies: ["Next.js", "React", "TypeScript"],
    image: nitroluxSiteImage,
    homepage: "https://www.nitrolux.com.br/",
    link: "https://github.com/Joaos32/SiteNitrolux",
  },
  {
    id: "estoque-ti",
    title: "EstoqueTI",
    category: "Sistema corporativo · Desktop + API",
    description:
      "Sistema para controlar o ciclo de vida de equipamentos de TI, com autenticação, movimentações de estoque, dashboard, auditoria e exportação de relatórios.",
    impact:
      "Centraliza ativos, responsáveis, localizações e históricos de movimentação, oferecendo rastreabilidade e apoio à gestão do ambiente corporativo.",
    technologies: ["Java 17", "Spring Boot", "JavaFX", "PostgreSQL"],
    image: inventoryImage,
    link: "https://github.com/Joaos32/EstoqueJava",
  },
  {
    id: "catalogo-nitrolux",
    title: "Catálogo Nitrolux",
    category: "Plataforma comercial · Web + API",
    description:
      "Plataforma full stack que centraliza produtos e imagens das marcas Nitrolux e Pienza em um catálogo comercial pesquisável, responsivo e exportável.",
    impact:
      "Consolida dados de diferentes fontes, organiza mídias de produtos e oferece busca, filtros, exportações e um painel administrativo para cargas do ERP e gestão de acessos.",
    technologies: ["FastAPI", "React", "TypeScript", "AWS"],
    image: nitroluxCatalogImage,
    link: "https://github.com/Joaos32/Catalogo-Nitrolux",
  },
  {
    id: "portfolio",
    title: "Portfólio Profissional",
    category: "Projeto pessoal · Web",
    description:
      "Aplicação responsiva para apresentar minha trajetória, habilidades e projetos em uma experiência consistente nos temas claro e escuro.",
    impact:
      "Centraliza minha presença profissional, facilita o acesso aos trabalhos públicos e cria um canal direto para novas oportunidades e colaborações.",
    technologies: ["React", "Vite", "Material UI", "JavaScript"],
    image: portfolioImage,
    homepage: "https://portfolio-joao-vitors-projects-bbed36cf.vercel.app",
    link: "https://github.com/Joaos32/Portfolio",
  },
];

function Projects() {
  useEffect(() => {
    document.title = "Projetos | Portfólio de João Vitor";
  }, []);

  return (
    <Container maxWidth="lg" sx={{ py: { xs: 7, md: 10 } }}>
      <Box
        sx={{
          maxWidth: 760,
          mx: "auto",
          textAlign: "center",
          mb: { xs: 5, md: 7 },
        }}
      >
        <Typography
          color="secondary.main"
          fontWeight={600}
          sx={{ letterSpacing: 1.5, textTransform: "uppercase", mb: 1 }}
        >
          Trabalho selecionado
        </Typography>
        <Typography variant="h3" component="h1" sx={{ mb: 2 }}>
          Projetos que transformam necessidades em soluções
        </Typography>
        <Typography
          color="text.secondary"
          sx={{ fontSize: "1.08rem", lineHeight: 1.8 }}
        >
          Uma seleção de produtos profissionais e sistemas que mostram minha
          atuação em experiências web, aplicativos mobile, APIs e software
          corporativo.
        </Typography>
      </Box>

      <Box
        sx={{
          display: "grid",
          gridTemplateColumns: { xs: "1fr", md: "repeat(2, minmax(0, 1fr))" },
          gap: 4,
        }}
      >
        {projects.map((project) => (
          <ProjectCard key={project.id} {...project} />
        ))}
      </Box>
    </Container>
  );
}

export default Projects;
