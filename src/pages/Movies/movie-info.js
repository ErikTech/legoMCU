import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';



// Movies page component
 class MoviesInfo extends Component {
   componentDidMount(){
     // const Xxx = this.props.location.state.movie.name
     console.log(this.props);
   }
  // render
  render() {
    const theSets = this.props.location.state.movie.sets
    console.log(theSets)

    return (
      <div>
        <h1>{ this.props.location.state.movie.name }</h1>
        <ul>
        { theSets.map((set, index) => {
        // let movieFullURL = ("/movies/" + movie.slug)

        // const newTo = {
        // 	pathname: movieFullURL,
        // 	param1: movie.name
        // }

        return (
          <li className="movieListItem" key={index}>
            <div><a href={set.amazon_url}>{set.name} - {set.product_id}</a></div>
            <ul>{set.minifigures.map((minifig, index) => {
              return(
                <li key={index}>{minifig}</li>
              )

            })}</ul>

        </li>
        )
      }
    )}</ul>
      </div>
    );
  }
}


class MoviesInfoPage extends Component {
	render() {
		return (
			<ul className="moviesInfo">
				<MoviesInfo location={this.props.location} {...this.props} />
			</ul>
		)
	}
}
export default withRouter(MoviesInfoPage);
