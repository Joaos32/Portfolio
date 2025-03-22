import { Container, Typography, Box, Avatar, Divider, LinearProgress } from "@mui/material";
import { motion } from "framer-motion";
import { FaReact, FaPython, FaNodeJs, FaDatabase } from "react-icons/fa";
import { useEffect, useState } from "react";

const skills = [
  { name: "React", icon: <FaReact size={30} color="#61DBFB" />, level: 90 },
  { name: "FastAPI", icon: <FaPython size={30} color="#3776AB" />, level: 85 },
  { name: "Node.js", icon: <FaNodeJs size={30} color="#68A063" />, level: 80 },
  { name: "PostgreSQL", icon: <FaDatabase size={30} color="#336791" />, level: 75 },
];

const About = () => {
  const [progress, setProgress] = useState(skills.map(() => 0));

  useEffect(() => {
    const timer = setTimeout(() => {
      setProgress(skills.map(skill => skill.level));
    }, 500);
    return () => clearTimeout(timer);
  }, []);

  return (
    <Container sx={{ mt: 8, textAlign: "center", minHeight: "100vh", p: 3 }}>
      {/* Seção do Avatar e Introdução */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <Avatar
          src="/assets/avatar.png"
          alt="João Vitor"
          sx={{ width: 140, height: 140, margin: "auto", mb: 2, boxShadow: 3 }}
        />
        <Typography variant="h4" color="primary" fontWeight="bold" gutterBottom>
          Sobre Mim
        </Typography>
        <Typography variant="body1" color="textSecondary" paragraph sx={{ maxWidth: "600px", margin: "auto" }}>
          Olá! Meu nome é <strong>João Vitor</strong>, sou um desenvolvedor apaixonado por tecnologia e inovação. 
          Minha jornada na programação começou com a curiosidade de entender como as coisas funcionam nos bastidores do mundo digital, 
          e desde então venho aprimorando minhas habilidades para construir soluções eficientes e impactantes.
        </Typography>
        <Typography variant="body1" color="textSecondary" paragraph sx={{ maxWidth: "600px", margin: "auto" }}>
          Tenho experiência sólida no desenvolvimento <strong>Full Stack</strong>, trabalhando com tecnologias como 
          <strong> React, React Native, FastAPI, PostgreSQL</strong> e muitas outras. Meu foco é criar aplicações modernas, 
          responsivas e bem estruturadas, garantindo sempre a melhor experiência para o usuário final.
        </Typography>
        <Typography variant="body1" color="textSecondary" paragraph sx={{ maxWidth: "600px", margin: "auto" }}>
          Estou sempre em busca de novos desafios e aprendizados, acreditando que a tecnologia tem o poder de transformar 
          o mundo e facilitar a vida das pessoas. Vamos inovar juntos? 🚀
        </Typography>
      </motion.div>

      <Divider sx={{ my: 4, width: "60%", margin: "auto" }} />

      {/* Seção de Habilidades */}
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.7, delay: 0.3 }}
      >
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
                sx={{ height: 8, borderRadius: 5, flexGrow: 1, mx: 2 }}
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