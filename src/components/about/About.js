import React from "react";
import { Box, Button, Stack, Typography } from "@mui/material";
import "../styles.css";
import AboutCard from "./AboutCard";
import Icon from "@mdi/react";
import { mdiElectronFramework } from "@mdi/js";

const cardInfo = [
  {
    icon: <Icon path={mdiElectronFramework} size={5} />,
    title: "title 1",
    text: "text",
  },
  {
    icon: <Icon path={mdiElectronFramework} size={5} />,
    title: "title 1",
    text: "text",
  },
  {
    icon: <Icon path={mdiElectronFramework} size={5} />,
    title: "title 1",
    text: "text",
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
          {cardInfo.map((item) => (
            <AboutCard title={item.title} icon={item.icon} text={item.text} />
          ))}
        </Stack>
      </Box>
    </Box>
  );
}
