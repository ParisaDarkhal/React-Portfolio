import React from "react";
import { Box, Stack, Typography } from "@mui/material";
import "../styles.css";
import AboutCard from "./AboutCard";
import Icon from "@mdi/react";
import { mdiElectronFramework } from "@mdi/js";
import { FaStudiovinari, FaBookReader, FaAlgolia } from "react-icons/fa";
import { RiTeamFill } from "react-icons/ri";
import { DiResponsive } from "react-icons/di";
import { MdDynamicFeed } from "react-icons/md";

const aboutCardInfo = [
  {
    icon: <FaBookReader size={60} />,
    title: "Love to Learn",
    text: "eager to take on new challenges and learn new skills",
  },
  {
    icon: <FaAlgolia size={60} />,
    title: "Reliable",
    text: "Have a strong work ethic & a sense of responsibility",
  },
  {
    icon: <RiTeamFill size={60} />,
    title: "Team Work",
    text: "team player, always collaborating & cooperating to get the best results",
  },
];

const ProjectCardInfo = [
  {
    icon: <FaStudiovinari size={60} />,
    title: "Fast",
    text: "Fast load times and lag free interaction",
  },
  {
    icon: <DiResponsive size={70} />,
    title: "Responsive",
    text: "Layouts that work on any device, big or small.",
  },
  {
    icon: <MdDynamicFeed size={60} />,
    title: "Dynamic",
    text: " Love making pages come to life.",
  },
];

export default function About() {
  return (
    <Box id="aboutMe">
      <Box padding={5} margin="auto">
        <Typography variant="h3" gutterBottom>
          About Me
        </Typography>
        <Stack
          direction={{ sm: "column", md: "row" }}
          // spacing={{ sm: 6, md: 6 }}
        >
          {aboutCardInfo.map((item, index) => (
            <AboutCard
              key={index}
              title={item.title}
              icon={item.icon}
              text={item.text}
            />
          ))}
        </Stack>
      </Box>
      <Box padding={5} margin="auto">
        <Typography variant="h3" gutterBottom>
          I Want My Projects To Be:
        </Typography>
        <Stack
          direction={{ sm: "column", md: "row" }}
          // spacing={{ sm: 6, md: 6 }}
        >
          {ProjectCardInfo.map((item, index) => (
            <AboutCard
              key={index}
              title={item.title}
              icon={item.icon}
              text={item.text}
            />
          ))}
        </Stack>
      </Box>
    </Box>
  );
}
