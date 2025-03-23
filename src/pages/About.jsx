import { useEffect, useState } from "react";
import { Container, Typography, Box, Avatar, Divider, LinearProgress } from "@mui/material";
import { motion } from "framer-motion";
import { FaReact, FaPython, FaNodeJs, FaDatabase } from "react-icons/fa";
import avatar from "../assets/Desenvolvedor FullStack.jpg"; // Importando a imagem corretamente

const skills = [
  { name: "React", icon: <FaReact size={30} color="#61DBFB" />, level: 90 },
  { name: "FastAPI", icon: <FaPython size={30} color="#3776AB" />, level: 85 },
  { name: "Node.js", icon: <FaNodeJs size={30} color="#68A063" />, level: 80 },
  { name: "PostgreSQL", icon: <FaDatabase size={30} color="#336791" />, level: 75 },
];

const About = () => {
  const [progress, setProgress] = useState(skills.map(() => 0));

  useEffect(() => {
    document.title = "Sobre Mim | Portfólio de João Silva";

    // Animação das barras de progresso
    const timeouts = skills.map((skill, index) =>
      setTimeout(() => {
        setProgress((prevProgress) => {
          const newProgress = [...prevProgress];
          newProgress[index] = skill.level;
          return newProgress;
        });
      }, index * 300) // Pequeno atraso entre as barras
    );

    return () => {
      timeouts.forEach(clearTimeout);
    };
  }, []);

  return (
    <Container sx={{ mt: 8, textAlign: "center", minHeight: "100vh", p: 3 }}>
      {/* Seção do Avatar e Introdução */}
      <motion.div initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
        <Avatar
          src={avatar} // Caminho da imagem corrigido
          alt="João Vitor"
          sx={{ width: 140, height: 140, margin: "auto", mb: 2, boxShadow: 3 }}
        />
        <Typography variant="h4" color="primary" fontWeight="bold" gutterBottom>
          Sobre Mim
        </Typography>
        <Typography variant="body1" color="textSecondary" paragraph sx={{ maxWidth: "600px", margin: "auto" }}>
          💬 <strong>
          Oi! Eu sou o João Vitor, um desenvolvedor apaixonado por tecnologia e inovação.  
          Desde pequeno, sempre fui curioso para entender como as coisas funcionam por trás das telas,  
          o que me levou a mergulhar no mundo da programação. Hoje, transformo essa curiosidade em código,  
          criando soluções práticas e eficientes que fazem a diferença. Estou sempre buscando aprender e  
          evoluir para entregar projetos cada vez melhores!
          </strong>
        </Typography>
      </motion.div>

      <Divider sx={{ my: 4, width: "60%", margin: "auto" }} />

      {/* Seção de Habilidades */}
      <motion.div initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.7, delay: 0.3 }}>
        <Typography variant="h5" color="secondary" fontWeight="bold" gutterBottom>
          💡 Habilidades e Tecnologias:
        </Typography>
        <Box sx={{ maxWidth: "600px", margin: "auto", textAlign: "left" }}>
          {skills.map((skill, index) => (
            <Box key={index} sx={{ display: "flex", alignItems: "center", mb: 2 }}>
              {skill.icon}
              <Typography variant="body1" sx={{ ml: 1, fontWeight: "bold", width: "120px" }}>
                {skill.name}
              </Typography>
              <LinearProgress
                variant="determinate"
                value={progress[index]}
                sx={{ height: 8, borderRadius: 5, flexGrow: 1, mx: 2, transition: "width 1s ease-in-out" }}
              />
              <Typography variant="body2" sx={{ fontWeight: "bold", color: "gray", minWidth: "40px" }}>
                {progress[index]}%
              </Typography>
            </Box>
          ))}
        </Box>
      </motion.div>
    </Container>
  );
};

export default About;
