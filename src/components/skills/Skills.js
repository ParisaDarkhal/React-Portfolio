import React from "react";
import {
  Box,
  Stack,
  Typography,
  Grid,
  Card,
  CardContent,
  CardMedia,
} from "@mui/material";
import "../styles.css";
import skillsImage from "./Skills.svg";
import fullPicImage from "./fullPic.svg";

export default function Skills() {
  return (
    <Box
      id="skills"
      className="darkBg"
      padding={5}
      margin="auto"
      style={{ color: "white" }}
    >
      <Typography variant="h3" gutterBottom>
        Skills
      </Typography>
      <Grid container spacing={3}>
        {/* <Grid item className="skills" sm={12} md={6}>
          <img src="./images/Skills.svg" alt="skills" height={450} />
        </Grid> */}
        <Grid item sm={12} md={6} className="whoIsMe">
          <Card
            sx={{ maxWidth: 450, backgroundColor: "#3d3e49", color: "white" }}
          >
            <CardMedia
              sx={{ height: 350 }}
              image={skillsImage}
              title="ProImage"
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                Parisa's Programming Skills
              </Typography>
              <Typography variant="body2" color="white" className="aboutMe">
                I'm a web developer with expertise in JavaScript, Node.js, HTML,
                React, MongoDB, MySQL, Material UI, CSS, Bootstrap, Tailwind,
                and Handlebars. My skills encompass dynamic web app development,
                intuitive UI design, and efficient data storage. I'm committed
                to continuous learning and staying up-to-date with the latest
                industry trends. My goal is to create visually appealing and
                user-friendly websites by leveraging powerful technologies and
                frameworks.
              </Typography>
            </CardContent>
          </Card>
        </Grid>
        <Grid item sm={12} md={6} className="whoIsMe">
          <Card
            sx={{ maxWidth: 450, backgroundColor: "#3d3e49", color: "white" }}
          >
            <CardMedia
              sx={{ height: 350 }}
              image={fullPicImage}
              title="ProImage"
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                Who is Parisa?
              </Typography>
              <Typography variant="body2" color="white" className="aboutMe">
                I transitioned from a successful career as a Pharmacist and
                Pharma scientist to pursue my passion for creating and making.
                Recognizing the vast impact of websites in the daily lives of
                people worldwide, I made a deliberate choice to enter the field
                of Web Development. Now, I actively contribute to crafting and
                delivering user-friendly websites that serve diverse audiences
                globally.
              </Typography>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </Box>
  );
}
