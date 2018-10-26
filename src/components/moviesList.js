import React, { Component } from 'react';
import MoviesData from '../data/movies-test.json'
import { Route, Link } from "react-router-dom";
import MoviesInfoPage from '../pages/Movies/movie-info';




function Movies ({ match }) {
  return (
    <div>
      <h1>Movies</h1>
      <ul>
			{ MoviesData.map(movie => {
			// let movieFullURL = ("/movies/" + movie.slug)

			// const newTo = {
			// 	pathname: movieFullURL,
			// 	param1: movie.name
			// }

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
	)}
      </ul>

      <hr />

      <Route path={`/movies/:movieSlug`} component={MoviesInfoPage}/>
    </div>
  )
}

class MoviesList extends Component {

	render() {
		return (
			<ul className="movieList">
				<Movies/>

			</ul>
		)
	}
}
export default MoviesList;
