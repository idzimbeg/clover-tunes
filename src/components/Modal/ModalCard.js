import React from "react";
import { Box, Button, CardMedia, Modal, Typography } from "@mui/material";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};

const ModalCard = (props) => {
  return (
    <Modal open={props.open} key={props.id}>
      <Box sx={style}>
        <Button onClick={props.handleCloseModal} variant="outlined">
          Close
        </Button>
        <Typography
          variant="h5"
          align="center"
          color="text.secondary"
          sx={{ sp: 2 }}
        >
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
        <Typography
          variant="h4"
          align="center"
          color="text.secondary"
          sx={{ sp: 2 }}
        >
          {props.artist}
        </Typography>
      </Box>
    </Modal>
  );
};

export default ModalCard;
