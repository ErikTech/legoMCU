import React from "react";
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom'

import HomePage from './pages/Home/home';
import MoviesPage from './pages/Movies/movies';

import NotFound from './pages/NotFound/notfound';



const Routes = (props) => (
	<Router {...props}>
		<div>
			<ul>
				<li><Link to="/">Home</Link></li>
				<li><Link to="/movies">Movies</Link></li>
			</ul>
			<Switch>
				<Route exact path="/" component={HomePage} />
				<Route path="/movies" component={MoviesPage} />

				<Route component={NotFound} />
			</Switch>
		</div>
	</Router>
);

export default Routes;
