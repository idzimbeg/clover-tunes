import React from 'react';

import Song from '../Song/Song';

const SongsList = (props) => {
  return (
    <ul>
      {props.tracks.map((track) => (
        <Song
          key={track.id}
          title={track.title}
          duration={track.duration}
          artist={track.artist}
        />
      ))}
    </ul>
  );
};

export default SongsList;
