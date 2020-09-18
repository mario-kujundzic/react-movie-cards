import React from 'react';
import PropTypes from 'prop-types';

import MovieCard from './MovieCard';
import AddCard from './AddCard'

const getMovies = (movies, addMovie) => (
  <div className="card-deck">
    {movies.map(movie => (
      <MovieCard key={movie.id} movie={movie}  />
    ))}
    <AddCard addMovie={addMovie} />
  </div>
);

const MovieList = ({ movies, addMovie }) => <div>{getMovies(movies, addMovie)}</div>;

MovieList.defaultProps = {
  movies: [],
};

MovieList.propTypes = {
  movies: PropTypes.array,
};

export default MovieList;
