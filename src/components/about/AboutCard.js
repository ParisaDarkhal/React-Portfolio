import * as React from "react";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Icon from "@mdi/react";
import { mdiElectronFramework } from "@mdi/js";

export default function AboutCard({ icon, title, text }) {
  return (
    <Card sx={{ minWidth: 275, margin: 1 }} elevation={10}>
      <CardContent>
        {icon}
        <Typography variant="h5" component="div">
          {title}
        </Typography>
        <Typography sx={{ mb: 1.5 }} color="text.secondary">
          {text}
        </Typography>
      </CardContent>
    </Card>
  );
}
