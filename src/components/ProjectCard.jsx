import {
  Box,
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Chip,
  Divider,
  Stack,
  Typography,
} from "@mui/material";
import { GitHub, Launch } from "@mui/icons-material";
import { motion, useReducedMotion } from "framer-motion";

function ProjectCard({
  title,
  description,
  category,
  impact,
  image,
  link,
  homepage,
  technologies = [],
}) {
  const reduceMotion = useReducedMotion();

  return (
    <motion.div
      style={{ width: "100%", height: "100%" }}
      whileHover={reduceMotion ? undefined : { y: -6 }}
      transition={{ duration: 0.2 }}
    >
      <Card
        sx={{
          height: "100%",
          display: "flex",
          flexDirection: "column",
          overflow: "hidden",
          border: "1px solid",
          borderColor: "divider",
          bgcolor: "background.paper",
          boxShadow: "none",
          transition: "box-shadow 180ms ease, border-color 180ms ease",
          "&:hover": {
            borderColor: "primary.main",
            boxShadow: "0 18px 45px rgba(0,0,0,0.18)",
          },
        }}
      >
        <CardMedia
          component="img"
          height="250"
          loading="lazy"
          image={image}
          alt={`Prévia do projeto ${title}`}
          sx={{
            objectFit: "cover",
            bgcolor: "action.hover",
            borderBottom: "1px solid",
            borderColor: "divider",
          }}
        />
        <CardContent sx={{ p: 3, flexGrow: 1 }}>
          <Typography
            color="secondary.main"
            variant="overline"
            fontWeight={700}
            sx={{ letterSpacing: 1.2 }}
          >
            {category}
          </Typography>
          <Typography component="h2" variant="h5" fontWeight={700} gutterBottom>
            {title}
          </Typography>
          <Typography color="text.secondary" sx={{ lineHeight: 1.75 }}>
            {description}
          </Typography>
          <Divider sx={{ my: 2.5 }} />
          <Typography variant="subtitle2" fontWeight={700} sx={{ mb: 0.75 }}>
            Resultado e responsabilidade
          </Typography>
          <Typography
            color="text.secondary"
            variant="body2"
            sx={{ lineHeight: 1.7 }}
          >
            {impact}
          </Typography>
          <Stack
            direction="row"
            useFlexGap
            flexWrap="wrap"
            spacing={1}
            sx={{ mt: 2.5 }}
          >
            {technologies.map((technology) => (
              <Chip
                key={technology}
                label={technology}
                size="small"
                color="primary"
                variant="outlined"
              />
            ))}
          </Stack>
        </CardContent>
        <CardActions sx={{ px: 3, pb: 3, pt: 0, gap: 1 }}>
          {homepage && (
            <Button
              href={homepage}
              target="_blank"
              rel="noreferrer"
              variant="contained"
              startIcon={<Launch />}
            >
              Ver demonstração
            </Button>
          )}
          {link && (
            <Button
              href={link}
              target="_blank"
              rel="noreferrer"
              variant={homepage ? "text" : "contained"}
              startIcon={<GitHub />}
            >
              Ver código
            </Button>
          )}
        </CardActions>
      </Card>
    </motion.div>
  );
}

export default ProjectCard;
