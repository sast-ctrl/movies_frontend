import React from 'react';
import ReactStars from 'react-rating-stars-component';

const RatingMovie = () => {
    return (
        <>
            <hr className='mt-5' />
            <div className='row'>
                <div className='col-12 mb-4'>
                    <h3>Add a review</h3>
                    <form>
                        <div className='form-group d-flex justify-content-end'>
                            <ReactStars onChange={''} count={5} size={30} isHalf={false} edit={true} activeColor='#ffd700' />
                        </div>

                        <div className='form-group'>
                            <textarea onChange={''} className='form-control' rows={'8'} required />
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
