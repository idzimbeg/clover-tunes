import React, { useState, useRef } from "react";
import Song from "../Song/Song";
import ModalCard from "../Modal/ModalCard";
import useSort from "../hooks/useSort";

import {
  AppBar,
  Box,
  Button,
  Card,
  CardContent,
  Container,
  CssBaseline,
  Grid,
  Stack,
  Toolbar,
  Typography,
} from "@mui/material";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import SpaOutlinedIcon from "@mui/icons-material/SpaOutlined";

const theme = createTheme();

const SongsList = (props) => {
  const clickedElement = useRef(null);
  const [open, setOpen] = useState(false);
  const { items, requestSort, sortConfig } = useSort(props.songs);
  // const getClassNamesFor = (duration) => {
  //   if (!sortConfig) {
  //     return;
  //   }
  //   return sortConfig.key === duration ? sortConfig.direction : undefined;
  // };

  const handleOpenModal = (id) => () => {
    setOpen(true);
  };
  const handleCloseModal = () => {
    setOpen(false);
  };
  const sortHandler = () => {
    requestSort('duration')
  }
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <AppBar position="relative">
        <Toolbar sx={{ bgcolor: "#388e3c" }}>
          <Typography variant="h6" color="inherit" noWrap>
            ShamRock!
          </Typography>
          <SpaOutlinedIcon />
        </Toolbar>
      </AppBar>
      <main>
        <Box
          sx={{
            bgcolor: "background.paper",
            pt: 8,
            pb: 6,
          }}
        >
          <Container maxWidth="sm">
            <Typography
              component="h1"
              variant="h2"
              align="center"
              color="text.primary"
              gutterBottom
            >
              ShamRock!
            </Typography>
            <Typography
              variant="h5"
              align="center"
              color="text.secondary"
              paragraph
            >
              Your World of Music
            </Typography>
            <Stack
              sx={{ pt: 4 }}
              direction="row"
              spacing={2}
              justifyContent="center"
            >
              <Button
                variant="contained"
                sx={{ bgcolor: "#388e3c" }}
                onClick={props.fetchSongsHandler}
              >
                Fetch Songs
              </Button>
              <Button
                variant="contained"
                sx={{ bgcolor: "#388e3c" }}
                type="button"
              onClick={sortHandler}
              >
                Sort by duration
              </Button>
            </Stack>
          </Container>
        </Box>
        <ol>
          <Container sx={{ py: 8 }} maxWidth="md">
            <Grid container spacing={4}>
              {items.map((item, id) => (
                <Grid item key={item.id} xs={12} sm={6} md={4}>
                  <Card
                    sx={{
                      height: "100%",
                      display: "flex",
                      flexDirection: "column",
                      padding: "1rem",
                    }}
                    onClick={handleOpenModal(id)}
                  >
                    <CardContent sx={{ flexGrow: 1 }}>
                      <Song
                        ref={clickedElement}
                        key={item.id}
                        title={item.title}
                        duration={item.duration}
                        artist={item.artist}
                        image={item.image}
                      />
                    </CardContent>
                  </Card>
                </Grid>
              ))}
            </Grid>
            <ModalCard
              open={open}
              handleCloseModal={handleCloseModal}
              title={props.songs.title}
              duration={props.songs.duration}
              artist={props.songs.artist}
              image={props.songs.image}
            />
          </Container>
        </ol>
      </main>
    </ThemeProvider>
  );
};

export default SongsList;
