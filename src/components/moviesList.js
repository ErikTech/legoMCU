import React, { Component } from 'react';
import MoviesData from '../data/movies.json'


class Movies extends Component {
	render() {
		return MoviesData.map(movie => {
			// console.log(movie, MoviesData)
			return (
				<li className="movieListItem" key={movie.name}><a href="">{movie.name}</a></li>
			)
		})
	}
}

class MoviesList extends Component {
	constructor(props) {
		super(props);
		this.store = this.props.store;
		console.log(this.store)
	}

	render() {
		return (
			<ul className="movieList">
				<Movies />
			</ul>
		)
	}
}
export default MoviesList;
