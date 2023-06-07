import React from "react";
import { Box, Stack, Typography, Grid } from "@mui/material";
import "../styles.css";

export default function Skills() {
  return (
    <Box className="darkBg">
      <Grid container spacing={2}>
        <Grid className="skills" xs={6}>
          <img src="./images/Skills.svg" alt="skills" />
        </Grid>
        <Grid className="me" xs={6}>
          <img src="./images/fullPic.jpg" alt="Parisa" height={500} />
        </Grid>
      </Grid>
    </Box>
  );
}
