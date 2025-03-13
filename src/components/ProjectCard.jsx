import { Card, CardContent, CardMedia, Typography, CardActions, Button } from "@mui/material";
import { motion } from "framer-motion";

function ProjectCard({ title, description, image, link }) {
  return (
    <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
      <Card
        sx={{
          maxWidth: 345,
          m: 2,
          transition: "0.3s",
          "&:hover": { boxShadow: "0 8px 16px rgba(0,0,0,0.3)" },
        }}
      >
        <CardMedia component="img" height="180" image={image} alt={title} />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {title}
          </Typography>
          <Typography variant="body2" color="textSecondary">
            {description}
          </Typography>
        </CardContent>
        <CardActions>
          <Button size="small" color="primary" href={link} target="_blank" variant="contained">
            Ver Projeto
          </Button>
        </CardActions>
      </Card>
    </motion.div>
  );
}

export default ProjectCard;
