import * as React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";

export default function ProjectCard({
  alt,
  imageUrl,
  title,
  description,
  githubUrl,
  pageUrl,
}) {
  return (
    <Card sx={{ maxWidth: 400 }}>
      <CardMedia component="img" alt={alt} height="200" image={imageUrl} />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {title}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {description}
        </Typography>
      </CardContent>
      <CardActions>
        <Button href={githubUrl} target="_blank" size="small">
          Github Repo
        </Button>
        <Button href={pageUrl} target="_blank" size="small">
          Visit Page
        </Button>
      </CardActions>
    </Card>
  );
}
