import React from "react";
import { Box, Stack, Typography, Grid } from "@mui/material";
import "../styles.css";

export default function Skills() {
  return (
    <Box className="darkBg">
      <Grid container spacing={3}>
        <Grid item className="skills" sm={12} md={6}>
          <img src="./images/Skills.svg" alt="skills" height={450} />
        </Grid>
        <Grid item sm={12} md={6} className="whoIsMe">
          <img
            src="./images/fullPic.svg"
            alt="Parisa"
            height={250}
            className="proImg"
          />
          <Typography variant="h5" className="aboutMe">
            Who is Parisa
          </Typography>
          <Typography variant="p" className="aboutMe">
            I transitioned from a successful career as a Pharmacist and Pharma
            scientist to pursue my passion for creating and making. Recognizing
            the vast impact of websites in the daily lives of people worldwide,
            I made a deliberate choice to enter the field of Web Development.
            Now, I actively contribute to crafting and delivering user-friendly
            websites that serve diverse audiences globally.
          </Typography>
        </Grid>
      </Grid>
    </Box>
  );
}
