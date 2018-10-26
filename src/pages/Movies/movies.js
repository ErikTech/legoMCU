import React from "react";
import MoviesList from "../../components/moviesList.js"
import '../../pages/Movies/movies.css';


// Movies page component
export default class MoviesPage extends React.Component {
  // render
  render() {
    return (
      <div className="page-home">
        <h4>Movies Page</h4>
        <MoviesList />
      </div>
    );
  }
}
