import React, { useState, useCallback, useEffect } from "react";
import CloverIcon from "../CloverIcon/CloverIcon";
import SongsList from "../SongsList/SongsList";

const PlayList = () => {
  const [songs, setSongs] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const fetchSongsHandler = useCallback(async () => {
    setIsLoading(true);
    setError(null);
    try {
      const response = await fetch(
        "https://cors-anywhere.herokuapp.com/https://api.deezer.com/chart/tracks/tracks/"
      );

      if (!response.ok) {
        throw new Error("Something went wrong!");
      }

      const data = await response.json();

      const loadedSongs = data.data.map((song) => ({
        id: song.id,
        title: song.title,
        duration: song.duration,
        artist: song.artist.name,
        image: song.artist.picture_big,
      }));
      setSongs(loadedSongs);
      console.log(data);
    } catch (error) {
      setError(error.message);
    }
    setIsLoading(false);
  }, []);
  useEffect(() => {
    fetchSongsHandler();
  }, [fetchSongsHandler]);

  let content = <p>Found no songs.</p>;

  if (songs.length > 0) {
    content = (
      <SongsList
        songs={songs}
        fetchSongsHandler={fetchSongsHandler}
        // sortHandler={sortHandler}
      />
    );
  }

  if (error) {
    content = <p>{error}</p>;
  }

  if (isLoading) {
    content = <CloverIcon />;
  }

  return (
    <React.Fragment>
      <div>{content}</div>
    </React.Fragment>
  );
};

export default PlayList;
