import React, { useState } from 'react';

const MovieCard = ({ title, releaseDate, genre, plot }) => {
  return <div>
    <div className="card">
      <div className="card-body">
        <h5 className="card-title mb-3">{title} <span className="badge badge-primary ml-2">{genre}</span></h5>
        <h6 className="card-subtitle mb-2 text-muted">Release date: {releaseDate}</h6>

        <p className='card-text'>{plot}</p>
        <a href='#' className='card-link'>
          Details
        </a>
      </div>
    </div>
  </div>;
};

export default MovieCard;