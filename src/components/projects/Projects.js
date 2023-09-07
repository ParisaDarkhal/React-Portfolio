import React from "react";
import { Box, Stack, Typography, Grid } from "@mui/material";
import ProjectCard from "./ProjectCard";
import colorSimonGameImg from "./images/color-simon-game.jpg";
import movieBlogImg from "./images/MovieBlog.jpg";
import TechBlogImg from "./images/TechBlog.jpg";
import weatherDashboardImg from "./images/Weather-Dashboard.jpg";
import GotQuizImg from "./images/GOT-QUIZ.jpg";
import newsHomepageImg from "./images/news-homepage.jpg";
import urgentCareImg from "./images/landingPage.jpg";
import eternalEleganceImage from "./images/eternal-elegance.jpg";
import budgetManagementImage from "./images/budget-management.jpg";

const projectCardInfo = [
  {
    alt: "Urgent Care Check In",
    imageUrl: urgentCareImg,
    title: "Urgent Care Check In",
    description: "MERN, GraphQL, MongoDB, React",
    githubUrl: "https://github.com/ParisaDarkhal/Urgent-Care-Checkin",
    pageUrl: "https://urgent-care-checkin-2b5a8d3b5c6d.herokuapp.com/",
  },
  {
    alt: "Eternal Elegance",
    imageUrl: eternalEleganceImage,
    title: "Eternal Elegance",
    description: "MERN, GraphQL, MongoDB, React",
    githubUrl: "https://github.com/ParisaDarkhal/Eternal-Elegance-E-Commerce",
    // pageUrl: "",
  },
  {
    alt: "Budget Management",
    imageUrl: budgetManagementImage,
    title: "Budget Management",
    description: "MERN, MYSQL, Sequelize, React, Material UI, RESTFUL API",
    githubUrl: "https://github.com/ParisaDarkhal/budget-management",
    // pageUrl: "",
  },
  {
    alt: "Movie-Blog",
    imageUrl: movieBlogImg,

    title: "Movie Blog",
    description: "MONGODB, Handlebar, ...",
    githubUrl: "https://github.com/SK-Edwards/The-Movie-Blog",
    pageUrl: "https://the-movie-blog.herokuapp.com/movies",
  },
  {
    alt: "Color-Simon-Game",
    imageUrl: colorSimonGameImg,

    title: "Color Simon Game",
    description: "JavaScript, HTML, CSS",
    githubUrl: "https://github.com/ParisaDarkhal/Colors-Simon-Game",
    pageUrl: "https://parisadarkhal.github.io/Colors-Simon-Game/",
  },

  {
    alt: "Tech-Blog",
    imageUrl: TechBlogImg,

    title: "Tech Blog",
    description: "MONGODB, Handlebar, ...",
    githubUrl: "https://github.com/ParisaDarkhal/Tech-Blog",
    pageUrl: "https://tech-blog-pdg.herokuapp.com/",
  },
  {
    alt: "Weather Dashboard",
    imageUrl: weatherDashboardImg,

    title: "Weather Dashboard",
    description: "JavaScript, API, ...",
    githubUrl: "https://github.com/ParisaDarkhal/Weather-Dashboard",
    pageUrl: "https://parisadarkhal.github.io/Weather-Dashboard/",
  },
  {
    alt: "GOT Quiz",
    imageUrl: GotQuizImg,

    title: "GOT Trivia Quiz",
    description: "JavaScript,  ...",
    githubUrl: "https://github.com/ParisaDarkhal/Trivia-Quiz",
    pageUrl: "https://parisadarkhal.github.io/Trivia-Quiz/",
  },
  {
    alt: "News Homepage",
    imageUrl: newsHomepageImg,

    title: "News Homepage",
    description: "JavaScript, HTML, CSS",
    githubUrl:
      "https://parisadarkhal.github.io/MyFrontEndProjects/news-homepage-main/",
    pageUrl:
      "https://parisadarkhal.github.io/MyFrontEndProjects/news-homepage-main/",
  },
];

export default function Projec() {
  return (
    <Box id="projects">
      <Box padding={5} margin="auto">
        <Typography variant="h3" gutterBottom>
          Projects
        </Typography>

        <Grid container spacing={5}>
          {projectCardInfo.map((item, index) => (
            <Grid item xs={12} sm={6} md={4} key={index}>
              <ProjectCard
                alt={item.alt}
                imageUrl={item.imageUrl}
                title={item.title}
                description={item.description}
                githubUrl={item.githubUrl}
                pageUrl={item.pageUrl}
              />
            </Grid>
          ))}
        </Grid>
      </Box>
    </Box>
  );
}
