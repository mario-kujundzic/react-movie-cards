import React, {useState} from 'react';
import PropTypes from 'prop-types';

import StarRating from '../StarRating';

const MovieCard = ({ movie, deleteMovie, addRating }) => {
  const handleRating = (rating) => {
    addRating(movie.id, rating);
  };
  return  (
      <div className="movie-card">
        <div className="movie-card card">
          <div className="image-crop">
            <img className="card-img-top" src={movie.imageUrl} alt="" />
          </div>
          <div className="card-body">
            <h4 className="card-title">{movie.title}</h4>
            <h6 className="card-subtitle mb-2 text-muted">{movie.subtitle}</h6>
            <p className="text-justify" style={{ fontSize: '14px' }}>
              {movie.description}
            </p>
            {movie.deletable &&
            <button className="button-delete float-right badge badge-primary badge-pill" onClick={() => {deleteMovie(movie.id)}}>Delete movie</button>
            }
          </div>
          <div className="card-footer">
            <div className="clearfix">
              <div className="float-left mt-1">
                <StarRating addRating={handleRating} id={movie.id} 
                  rating={movie.rating.length != 0 ? movie.rating.reduce((total, r) => { return total + r;}, 0)/movie.rating.length : 0} />
              </div>
              <div className="card-footer-badge float-right badge badge-primary badge-pill">
                {movie.rating.length != 0 ? Math.round(10 * movie.rating.reduce((total, r) => { return total + r;}, 0)/movie.rating.length, 1)/10 : 0}
                <span className="tooltiptext">{movie.rating.length}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
MovieCard.defaultProps = {
  movie: {},
};

MovieCard.propTypes = {
  movie: PropTypes.object,
};


export default MovieCard;
