import React, { useEffect } from "react";
import useFetchSongs from "../../hooks/useFetchSongs";
import CloverIcon from "../CloverIcon/CloverIcon";
import SongsList from "../SongsList/SongsList";

const PlayList = () => {
  const { error, isLoading, fetchSongsHandler, songs } = useFetchSongs();
  useEffect(() => {
    fetchSongsHandler();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  let content = <p>Found no songs.</p>;

  if (songs.length > 0) {
    content = <SongsList songs={songs} fetchSongsHandler={fetchSongsHandler} />;
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
