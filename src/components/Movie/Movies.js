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

  render() {
    return (
      <div className="container-fluid" style={{ marginLeft: '-15px' }}>
        <div className="d-flex flex-row">
          <div className="col-sm-12">
            <MovieList movies={this.state.movies} addMovie={this.addMovie} />
          </div>
        </div>
      </div>
    );
  }
}
