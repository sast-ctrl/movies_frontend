
import React from 'react';
import ReactStars from 'react-rating-stars-component';
import { Link } from 'react-router-dom';

const MovieCard = ({ title, releaseDate, genre, plot, avgRating, slug, withLink = false }) => {
  return <div>
    <div className="card">
      <div className="card-body">
        <div className='d-flex flex-row align-items-center'>
          <ReactStars count={5} size={24} isHalf={true} edit={false} value={avgRating} activeColor='#ffd700' />
          <span className='ml-2'>{avgRating.toFixed(1)}</span>
        </div>
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