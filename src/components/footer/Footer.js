import React from "react";
import { Box, Button, IconButton, Typography } from "@mui/material";
import "../styles.css";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { SiGooglescholar } from "react-icons/si";

export default function Footer() {
  return (
    <Box className="lightBg">
      <Box width="50%" padding={5} margin="auto">
        <IconButton href="https://github.com/ParisaDarkhal" target="_blank">
          <FaGithub />
        </IconButton>
        <IconButton
          href="https://www.linkedin.com/in/parisa-darkhal-89a72466/"
          target="_blank"
        >
          <FaLinkedin />
        </IconButton>
        <IconButton
          href="https://scholar.google.com/citations?user=7M587hcAAAAJ&hl=en"
          target="_blank"
        >
          <SiGooglescholar />
        </IconButton>
      </Box>
    </Box>
  );
}
