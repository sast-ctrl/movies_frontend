import React, {useState} from 'react';

const MovieCard = ({title, releaseDate, genre }) => {
  return <div>

    <h4>{title}</h4>
    
    <p>Release date: {releaseDate}</p>

    <small>{genre}</small>
  </div>;
};

export default MovieCard;