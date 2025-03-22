import {
  Card,
  CardContent,
  CardMedia,
  Typography,
  CardActions,
  Button,
  LinearProgress,
  Box,
} from "@mui/material";
import { motion } from "framer-motion";
import { GitHub } from "@mui/icons-material";
import { useEffect, useState } from "react";

function ProjectCard({ title, description, image, link, progress }) {
  const [animatedProgress, setAnimatedProgress] = useState(0);

  useEffect(() => {
    const timer = setTimeout(() => {
      setAnimatedProgress(progress);
    }, 500);
    return () => clearTimeout(timer);
  }, [progress]);

  return (
    <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
      <Card
        sx={{
          maxWidth: 345,
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          m: 2,
          transition: "0.3s",
          background: "linear-gradient(135deg, #1e1e1e, #292929)",
          color: "white",
          "&:hover": { boxShadow: "0 8px 16px rgba(255,255,255,0.2)" },
        }}
      >
        <CardMedia
          component="img"
          height="180"
          image={image || "https://via.placeholder.com/345x180?text=Imagem+Indisponível"}
          alt={`Visual do projeto: ${title}`}
          sx={{ objectFit: "contain", backgroundColor: "#222" }}
          onError={(e) => (e.target.src = "https://via.placeholder.com/345x180?text=Imagem+Indisponível")}
        />
        <CardContent
          sx={{ flexGrow: 1, overflow: "hidden", textOverflow: "ellipsis" }}
        >
          <Typography gutterBottom variant="h5" component="div" sx={{ display: "flex", alignItems: "center", gap: 1 }}>
            {title} <GitHub fontSize="small" />
          </Typography>
          <Typography
            variant="body2"
            color="text.secondary"
            sx={{
              display: "-webkit-box",
              WebkitLineClamp: 3,
              WebkitBoxOrient: "vertical",
              overflow: "hidden",
            }}
          >
            {description}
          </Typography>
          <Box sx={{ mt: 2 }}>
            <Typography variant="body2" color="text.secondary">
              Progresso do Projeto: {animatedProgress}%
            </Typography>
            <LinearProgress
              variant="determinate"
              value={animatedProgress}
              sx={{ height: 8, borderRadius: 5, mt: 1 }}
            />
          </Box>
        </CardContent>
        <CardActions sx={{ justifyContent: "center", pb: 2 }}>
          <Button
            size="small"
            color="primary"
            href={link}
            target="_blank"
            variant="contained"
            aria-label={`Abrir projeto ${title}`}
            disabled={!link}
            sx={{
              transition: "0.3s",
              "&:hover": { backgroundColor: "#1976d2", transform: "scale(1.1)" },
            }}
            startIcon={<GitHub />}
          >
            Ver Projeto
          </Button>
        </CardActions>
      </Card>
    </motion.div>
  );
}

export default ProjectCard;