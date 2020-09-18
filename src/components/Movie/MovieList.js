import React from 'react';
import PropTypes from 'prop-types';

import MovieCard from './MovieCard';
import AddCard from './AddCard'

const getMovies = (movies, addMovie, deleteMovie) => (
  <div className="card-deck">
    {movies.map(movie => (
      <MovieCard key={movie.id} movie={movie} deleteMovie={deleteMovie}  />
    ))}
    <AddCard addMovie={addMovie} />
  </div>
);

const MovieList = ({ movies, addMovie, deleteMovie }) => <div>{getMovies(movies, addMovie, deleteMovie)}</div>;

MovieList.defaultProps = {
  movies: [],
};

MovieList.propTypes = {
  movies: PropTypes.array,
};

export default MovieList;
