import React from "react";
import {
  Box,
  Stack,
  Typography,
  Grid,
  Card,
  CardContent,
  CardMedia,
  FormControl,
  Button,
} from "@mui/material";
import "../styles.css";
import TextField from "@mui/material/TextField/TextField";

export default function ContactMe() {
  const handleSubmitBtn = () => {
    setTimeout(() => {
      alert("Thanks. I will be in touch with you.");
    }, 1000);
  };

  return (
    <Box
      id="contactMe"
      className="darkBg"
      padding={5}
      margin="auto"
      style={{ color: "white" }}
    >
      <Typography variant="h3" gutterBottom>
        Contact Me
      </Typography>
      <Box style={{ color: "white" }}>
        <iframe
          src="https://tally.so/embed/mBpRdK?alignLeft=1&hideTitle=1&transparentBackground=1&dynamicHeight=1"
          loading="lazy"
          width="80%"
          height="200"
          frameBorder="0"
          marginHeight="0"
          marginWidth="0"
          title="Contact Me
"
        ></iframe>
      </Box>
      {/* <Box py={5} margin={"auto"} width={"50%"}>
        <TextField
          fullWidth
          style={{ backgroundColor: "white", margin: "10px" }}
          color="warning"
          label="Enter Name"
        />
        <TextField
          fullWidth
          style={{ backgroundColor: "white", margin: "10px" }}
          color="warning"
          label="Enter Email"
        />
        <TextField
          fullWidth
          multiline
          minRows={3}
          style={{ backgroundColor: "white", margin: "10px" }}
          color="warning"
          label="Message"
        />
        <Box m={2}>
          <Button variant={"contained"} onClick={handleSubmitBtn}>
            Submit
          </Button>
        </Box> */}
      {/* </Box> */}
    </Box>
  );
}
