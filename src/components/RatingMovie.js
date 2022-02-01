import React, { useState } from 'react';
import ReactStars from 'react-rating-stars-component';
import axios from 'axios';

import { API_URL } from '../App';
import { getMouseEventOptions } from '@testing-library/user-event/dist/utils';

const RatingMovie = ( {movie, getMovie} ) => {

    const[rating, setRating] = useState(0);
    const[comment, setComment] = useState('');

    const ratingChanged = (newRating) => {
        setRating(newRating);
    };

    const commentChanged = (event) => {
        setComment(event.target.value);
    };

    const submitRating = (evt) => {
        evt.preventDefault();

        saveRating();
    };

    const saveRating = async () => {
        try {
            const config = {
                headers: {
                    'Content-type': 'application/json',
                    Authorization: `Bearer ${localStorage.getItem('jwt-token')}`
                }
            }
            const data = {
                movie: movie.id,
                comment,
                rating,
            };

            await axios.post(`${API_URL}/ratings/`, data, config);
            getMovie();
        } catch(error) {
            alert(`Error saving rating: ${error}`);
        }
    };

    return (
        <>
            <hr className='mt-5' />
            <div className='row'>
                <div className='col-12 mb-4'>
                    <h3>Add a review</h3>
                    <form onSubmit={submitRating}>
                        <div className='form-group d-flex justify-content-end'>
                            <ReactStars onChange={ratingChanged} count={5} size={30} isHalf={false} edit={true} activeColor='#ffd700' />
                        </div>

                        <div className='form-group'>
                            <textarea onChange={commentChanged} className='form-control' rows={'8'} required />
                        </div>

                        <button type='submit' className='btn btn-primary'>
                            Save
                        </button>
                    </form>
                </div>
            </div>
            <hr className='mb-5' />
        </>
    );
};

export default RatingMovie;
