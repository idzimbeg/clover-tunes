import React from "react";
import { CardContent, CardMedia, Typography } from "@mui/material";

const Song = (props) => {
  let minutes = Math.floor(props.duration / 60);
  let seconds = props.duration % 60;
  const formattedTime = `${minutes.toString().padStart(2, "0")}:${seconds
    .toString()
    .padStart(2, "0")}`;
  return (
    <CardContent>
      <li>
        <Typography gutterBottom variant="h5" component="h2">
          {props.title}
        </Typography>
        <CardMedia
          component="img"
          sx={{
            pt: "56.25%",
          }}
          image={props.image}
          alt="random"
        />
        <Typography gutterBottom variant="h5" component="h2">
          {props.artist}
        </Typography>
        <Typography gutterBottom variant="h6" component="h3">
          {`Duration: ${formattedTime}min`}
        </Typography>
      </li>
    </CardContent>
  );
};

export default Song;
