import React from 'react';

const Song = (props) => {
  return (
    <li>
      <h2>{props.title}</h2>
      <h3>{props.duration}</h3>
      <p>{props.artist}</p>
    </li>
  );
};

export default Song;
