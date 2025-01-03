import React from "react";
import { Card, CardActions, CardContent, Typography } from "@mui/material";

function InfoCard({ title, subTitle, icon, button, styles }) {
  return (
    <Card
      sx={{
        backgroundColor: "#05070a66",
        color: "white!important",
        border: "1px solid #303840",
        borderRadius: "10px",
        ...styles,
      }}
    >
      <CardContent>
        {icon}

        <Typography gutterBottom component="div" sx={{ fontWeight: "bold" }}>
          {title}
        </Typography>
        <Typography variant="body2" sx={{ color: "#B7B8BA" }}>
          {subTitle}
        </Typography>
      </CardContent>
      <CardActions>{button}</CardActions>
    </Card>
  );
}

export default InfoCard;
