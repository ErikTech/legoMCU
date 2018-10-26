import React, { Component } from 'react';
import MoviesData from '../data/movies-test.json'
import { Link } from "react-router-dom";


class Movies extends Component {

	render() {
		return (
			<div>
			{ MoviesData.map(movie => {
			let movieFullURL = ("/movies/" + movie.slug)

			// const newTo = {
			// 	pathname: movieFullURL,
			// 	param1: movie.name
			// }

			return (
				<li className="movieListItem" key={movie.name}>
					<Link to={movieFullURL}>
					{movie.name}
				</Link>


			</li>
			)
		})}
	</div>
)
	}
}

class MoviesList extends Component {
	render() {
		return (
			<ul className="movieList">
				<Movies />

			</ul>
		)
	}
}
export default MoviesList;
