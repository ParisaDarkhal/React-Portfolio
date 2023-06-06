import React from "react";
import { Box, Button, Stack, Typography } from "@mui/material";
import "../styles.css";
import AboutCard from "./AboutCard";
import Icon from "@mdi/react";
import { mdiElectronFramework } from "@mdi/js";

const aboutCardInfo = [
  {
    icon: <Icon path={mdiElectronFramework} size={5} />,
    title: "Love to Learn",
    text: "eager to take on new challenges and learn new skills",
  },
  {
    icon: <Icon path={mdiElectronFramework} size={5} />,
    title: "Reliable",
    text: "Have a strong work ethic & a sense of responsibility",
  },
  {
    icon: <Icon path={mdiElectronFramework} size={5} />,
    title: "Team Work",
    text: "team player, always collaborating & cooperating to get the best results",
  },
];

const ProjectCardInfo = [
  {
    icon: <Icon path={mdiElectronFramework} size={5} />,
    title: "Fast",
    text: "Fast load times and lag free interaction",
  },
  {
    icon: <Icon path={mdiElectronFramework} size={5} />,
    title: "Responsive",
    text: "Layouts that work on any device, big or small.",
  },
  {
    icon: <Icon path={mdiElectronFramework} size={5} />,
    title: "Dynamic",
    text: " Love making pages come to life.",
  },
];

export default function About() {
  return (
    <Box>
      <Box padding={5} margin="auto">
        <Typography variant="h3" gutterBottom>
          About Me
        </Typography>
        <Stack
          direction={{ sm: "column", md: "row" }}
          // spacing={{ sm: 6, md: 6 }}
        >
          {aboutCardInfo.map((item) => (
            <AboutCard title={item.title} icon={item.icon} text={item.text} />
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
          {ProjectCardInfo.map((item) => (
            <AboutCard title={item.title} icon={item.icon} text={item.text} />
          ))}
        </Stack>
      </Box>
    </Box>
  );
}
