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
import newBoyImage from "./images/New-Boy-Website.jpg";
import picfolio from "./images/picfolio.jpg";
import RPSLS from "./images/RPSLS.jpg";
import transformAiStudio from "./images/transformAiStudio.jpg";

const projectCardInfo = [
  {
    alt: "Transform AI Studio",
    imageUrl: transformAiStudio,
    title: "Transform AI Studio",
    description: "Astro and Tailwind",
    githubUrl: "#",
    pageUrl: "https://www.transformaistudio.com/",
    details:
      "Webpage designed and developed for Start Up company with different sections and links to their different pages.",
  },
  {
    alt: "New BOY Website",
    imageUrl: newBoyImage,
    title: "New BOY",
    description: "WordPress",
    githubUrl: "#",
    pageUrl:
      "https://newbreedofyouth.org/?fbclid=IwAR0htLIhCmVZxEczRD1H6OsJ2UdptuEQT1AEbUFr4cMU5MlUF12DYJzbbwQ",
    details:
      "I had the privilege of volunteering as a WordPress developer for the GLO23 event, part of the 48in48 initiative, where I contributed to the creation of a website for a non-profit organization. My responsibilities included designing and implementing various key components such as forms, an Events page, dedicated pages for Mentees and Mentors, and the site’s Navbar.",
  },
  {
    alt: "Urgent Care Check In",
    imageUrl: urgentCareImg,
    title: "Urgent Care Check In",
    description: "MERN, GraphQL, MongoDB, React",
    githubUrl: "https://github.com/ParisaDarkhal/Urgent-Care-Checkin",
    pageUrl: "https://urgent-care-checkin-2b5a8d3b5c6d.herokuapp.com/",
    details:
      "A highly adaptable appointment booking system originally designed for an urgent care practice that can be easily customized to suit various practices requiring appointment scheduling capabilities. Users are able to book, update, and cancel appointments through a user-friendly interface. ● Role: Collaborative Team Member, Backend and Frontend ● Tools: HTML, MongoDB, GraphQL, React, JavaScript, Bootstrap, Font Awesome",
  },
  {
    alt: "Movie-Blog",
    imageUrl: movieBlogImg,

    title: "Movie Blog",
    description: "MONGODB, Handlebar, ...",
    githubUrl: "https://github.com/SK-Edwards/The-Movie-Blog",
    pageUrl: "https://the-movie-blog.herokuapp.com/movies",
    details:
      "Interactive website that enables users to search for favorite movies and engage in discussions by leaving comments. My Role: Collaborative Team Member, Backend and Frontend ● Tools: MySQL, Express, Tailwind, REST APIs, Express, Express Handlebars, JavaScript, ORM (Sequelize)",
  },
  {
    alt: "Eternal Elegance",
    imageUrl: eternalEleganceImage,
    title: "Eternal Elegance",
    description: "MERN, GraphQL, MongoDB, React",
    githubUrl: "https://github.com/ParisaDarkhal/Eternal-Elegance-E-Commerce",
    // pageUrl: "",
    details:
      "Eternal Elegance is an e-commerce website for jewelry. The project was created to improve skills in MongoDB, GraphQL, React, Material UI, and other technologies.",
  },
  {
    alt: "Budget Management",
    imageUrl: budgetManagementImage,
    title: "Budget Management",
    description: "MERN, MYSQL, Sequelize, React, Material UI, RESTFUL API",
    githubUrl: "https://github.com/ParisaDarkhal/budget-management",
    // pageUrl: "",
    details:
      "Eternal Elegance is an e-commerce website for jewelry. The project was created to improve skills in MongoDB, GraphQL, React, Material UI, and other technologies.",
  },
  {
    alt: "Picfolio",
    imageUrl: picfolio,

    title: "Picfolio",
    description: "React, MUI, mutler, react-photo-album library",
    githubUrl: "https://github.com/ParisaDarkhal/picfolio",
    pageUrl: "#",
    details:
      "PicFolio is a web application built with React and styled using Material-UI (MUI). It allows users to upload photos, organize them into albums, view pictures, navigate through them, and even have a slideshow experience using a carousel. Users also have the ability to delete photos by clicking on a delete button. The application utilizes the react-photo-album library for creating albums and managing photos and the multer npm package to handle photo uploads.",
  },
  {
    alt: "Rock Paper Scissors Lizard Spock",
    imageUrl: RPSLS,

    title: "Rock Paper Scissors Lizard Spock",
    description: "React, MUI, JavaScript",
    githubUrl:
      "https://github.com/ParisaDarkhal/rock-paper-scissors-lizard-spock",
    pageUrl:
      "https://parisadarkhal.github.io/rock-paper-scissors-lizard-spock/",
    details:
      "Welcome to the Rock Paper Scissors Lizard Spock Game! This is a one-page web application that allows you to play the classic game with a twist. The game is built using React and programmed with JavaScript, and styled with Material UI. It is deployed on GitHub Pages.",
  },
  {
    alt: "Color-Simon-Game",
    imageUrl: colorSimonGameImg,

    title: "Color Simon Game",
    description: "JavaScript, HTML, CSS",
    githubUrl: "https://github.com/ParisaDarkhal/Colors-Simon-Game",
    pageUrl: "https://parisadarkhal.github.io/Colors-Simon-Game/",
    details: "It is a colored version of Simon-Said game.",
  },

  {
    alt: "Tech-Blog",
    imageUrl: TechBlogImg,

    title: "Tech Blog",
    description: "MONGODB, Handlebar, ...",
    githubUrl: "https://github.com/ParisaDarkhal/Tech-Blog",
    pageUrl: "https://tech-blog-pdg.herokuapp.com/",
    details:
      "Tech Blog is a web application that allows users to post content and comment on other people's posts. Users are required to log in or sign up before they can make a post. Once logged in, the user's username is displayed along with a logout button. Users can view all the posts, with the newest posts displayed at the top, by clicking on the home button. They can also click on individual posts to leave comments.",
  },
  {
    alt: "Weather Dashboard",
    imageUrl: weatherDashboardImg,

    title: "Weather Dashboard",
    description: "JavaScript, API, ...",
    githubUrl: "https://github.com/ParisaDarkhal/Weather-Dashboard",
    pageUrl: "https://parisadarkhal.github.io/Weather-Dashboard/",
    details:
      "This is a web application that provides weather information of a city for the current day and forecast for the next 5 days. It uses the third-party API provided by Openweathermap.org to get the weather data and day.js to handle date and time.",
  },
  {
    alt: "GOT Quiz",
    imageUrl: GotQuizImg,

    title: "GOT Trivia Quiz",
    description: "JavaScript,  ...",
    githubUrl: "https://github.com/ParisaDarkhal/Trivia-Quiz",
    pageUrl: "https://parisadarkhal.github.io/Trivia-Quiz/",
    details:
      "Welcome to the Trivia Quiz - Game of Thrones Edition! This is a timed multiple choice quiz designed to challenge your memory about the TV series Game of Thrones. You will have 30 seconds to answer 3 question, and your score will be based on the number of correct and incorrect answers.",
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
    details:
      "A challenge by FrontEnd Mentor page to practice and improve skills in HTML, CSS, JS",
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
                details={item.details}
              />
            </Grid>
          ))}
        </Grid>
      </Box>
    </Box>
  );
}
