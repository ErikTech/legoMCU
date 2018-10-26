import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';



// Movies page component
 class MoviesInfo extends Component {
   componentDidMount(){
     // const {name} = this.props.match.params
     // const Xxx = this.props.location.state.movie.name
     console.log(this.props);
   }
  // render
  render() {

    return (
      <div>
        <h1>{ this.props.location.state.movie.name }</h1>
        <ul>
        { this.props.location.state.movie.sets.map(set => {
        // let movieFullURL = ("/movies/" + movie.slug)

        // const newTo = {
        // 	pathname: movieFullURL,
        // 	param1: movie.name
        // }

        return (
          <li className="movieListItem" key={set.name}>
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
			<ul className="movieList">
				<MoviesInfo location={this.props.location} {...this.props} />
			</ul>
		)
	}
}
export default withRouter(MoviesInfoPage);
