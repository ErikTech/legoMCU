import React, { Component } from 'react';
import MoviesData from '../data/movies-test.json'
import { Route, Link } from "react-router-dom";
import MoviesInfoPage from '../pages/Movies/movie-info';




function Movies () {
  return (
    <div>

			{ MoviesData.map(movie => {
			// let movieFullURL = ("/movies/" + movie.slug)

			// const newTo = {
			// 	pathname: movieFullURL,
			// 	param1: movie.name
			// }
			if (movie.sets.length != 0){
				return (
					<li className="movieListItem" key={movie.name}>
						<Link to={{
							pathname: `/movies/${movie.slug}`,
							state: {
									movie: movie
							}
						}}>
						{movie.name}
					</Link>
				</li>
				)
			}
		}
	)}

    </div>
  )
}

class MoviesList extends Component {

	render() {
		return (
			<div className="movieContainer">
			<ul className="movieList">
				<Movies/>
			</ul>
			<Route path={`/movies/:movieSlug`} component={MoviesInfoPage}/>
			</div>
		)
	}
}
export default MoviesList;
