import React from "react";
import { Box, Button, Typography } from "@mui/material";
import "./styles.css";

export default function Intro() {
  return (
    <Box className="lightBg">
      <Box width="50%" padding={20} margin="auto">
        <Typography variant="h3" gutterBottom>
          Hello! I am Parisa Darkhal. I am a a Full Stack Web Developer.
        </Typography>
        <Button variant="contained">Let's see my work</Button>
      </Box>
    </Box>
  );
}
