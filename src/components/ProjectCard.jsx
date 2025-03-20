import {
  Card,
  CardContent,
  CardMedia,
  Typography,
  CardActions,
  Button,
} from "@mui/material";


function ProjectCard({ title, description, image, link }) {
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
          "&:hover": { boxShadow: "0 8px 16px rgba(0,0,0,0.3)" },
        }}
      >
        <CardMedia
          component="img"
          height="180"
          image={image}
          alt={`Visual do projeto: ${title}`}
          sx={{ objectFit: "cover" }} // Garante que a imagem se ajuste bem
        />
        <CardContent
          sx={{ flexGrow: 1, overflow: "hidden", textOverflow: "ellipsis" }}
        >
          <Typography gutterBottom variant="h5" component="div">
            {title}
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
        </CardContent>
        <CardActions sx={{ justifyContent: "center", pb: 2 }}>
          <Button
            size="small"
            color="primary"
            href={link}
            target="_blank"
            variant="contained"
            aria-label={`Abrir projeto ${title}`}
            disabled={!link} // Evita erro caso o link seja undefined
          >
            Ver Projeto
          </Button>
        </CardActions>
      </Card>
    </motion.div>
  );
}

export default ProjectCard;
