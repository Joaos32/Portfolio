import { Card, CardContent, CardMedia, Typography, CardActions, Button } from "@mui/material";
import { motion } from "framer-motion";

function ProjectCard({ title, description, image, link }) {
  return (
    <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
      <Card
        sx={{
          maxWidth: 345,
          height: "100%", // Mantém altura uniforme
          display: "flex",
          flexDirection: "column", // Garante que os elementos fiquem bem organizados
          justifyContent: "space-between", // Distribui o conteúdo corretamente
          m: 2,
          transition: "0.3s",
          "&:hover": { boxShadow: "0 8px 16px rgba(0,0,0,0.3)" },
        }}
      >
        <CardMedia component="img" height="180" image={image} alt={`Imagem do projeto ${title}`} />
        <CardContent sx={{ flexGrow: 1 }}> {/* Permite que o conteúdo se ajuste bem */}
          <Typography gutterBottom variant="h5" component="div">
            {title}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {description}
          </Typography>
        </CardContent>
        <CardActions sx={{ justifyContent: "center", pb: 2 }}> {/* Centraliza botão */}
          <Button size="small" color="primary" href={link} target="_blank" variant="contained">
            Ver Projeto
          </Button>
        </CardActions>
      </Card>
    </motion.div>
  );
}

export default ProjectCard;
