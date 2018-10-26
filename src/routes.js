import React from "react";
import { BrowserRouter as Router, Route } from 'react-router-dom'

import HomePage from './pages/Home/home';
import MoviesPage from './pages/Movies/movies';
import NotFound from './pages/NotFound/notfound';



const Routes = (props) => (
	<Router {...props}>
		<div>
			<Route exact path="/" component={HomePage} />
			<Route path="*" component={NotFound} />
			<Route path="/movies" component={MoviesPage} />
		</div>
	</Router>
);

export default Routes;
