import React, { Component } from 'react';

import MovieList from './MovieList';
import MovieService from '../../services/MovieService';

export default class Movies extends Component {
  state = {
    movies: [],
  };

  componentDidMount() {
    this.setState(() => ({
      movies: MovieService.getMovies(),
    }));
  }

  addMovie = (movie) => {
    this.setState({
      movies: [...this.state.movies, movie]
    })
  }

  deleteMovie = (id) => {
    const newMovies = this.state.movies.reduce((movies, movie) => {
      if (movie.id !== id)
        movies.push(movie);
      return movies;
    }, [])
    this.setState({
      movies: newMovies
    })
  }

  render() {
    return (
      <div className="container-fluid" style={{ marginLeft: '-15px' }}>
        <div className="d-flex flex-row">
          <div className="col-sm-12">
            <MovieList movies={this.state.movies} addMovie={this.addMovie} deleteMovie={this.deleteMovie} />
          </div>
        </div>
      </div>
    );
  }
}
