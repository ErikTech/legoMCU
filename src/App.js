import React, {Component} from 'react';
// import {connect} from 'react-redux';
// import chooseMinifig from './actions/choose_minifig'
import MoviesList from './components/moviesList'
import DataChart from './components/DataChart'
import TestResults from './components/testresults'

import ChooseItem from './containers/ChooseItem'


// import { BrowserRouter as Router, Route, Link } from "react-router-dom";
// import { voteAngular, voteReact, voteVuejs } from './actions/index'
// import {bindActionCreators} from 'redux';
// import Results from './components/results';



import logo from './logo.svg';
import './App.css';
import './index.css';




class App extends Component {
	constructor(props) {
		super(props);

		// const minifig = {
		// 	name: ''
		// }
		// this.handleCharClick = this.handleCharClick.bind(this);

	}
	// handleVoteAngular = () => {
	// 	this.store.dispatch(voteAngular());
	// }
	// handleVoteReact = () => {
	// 	this.store.dispatch(voteReact());
	// }
	// handleVoteVuejs = () => {
	// 	this.store.dispatch(voteVuejs());
	// }
	// handleCharClick = (name) => {
	// 	const minifig = {
	// 		name: name
	// 	}
	// 	this.props.chooseMinifig(minifig);
	//
	// }
	render() {
		return (<div className="App">
			<header className="App-header">
				<img src={logo} className="App-logo" alt="logo"/>
				<h1 className="App-title">LegoMCU.com</h1>

			</header>
			<div>
				<ChooseItem />
				<TestResults />

			</div>


			<div>
					{/* <div onClick={this.handleVoteAngular}>Angular</div>
					<div onClick={this.handleVoteReact}>React</div>
					<div onClick={this.handleVoteVuejs}>Vue</div> */}
					{/* <div onClick={this.handleCharClick('Thor')}>Thor</div>
					<div onClick={this.handleCharClick('Iron Man')}>Iron Man</div>
					<div>{this.props.minifig.name}</div> */}
					<MoviesList />
					<DataChart />

					{/* <Results store={this.store}/> */}


			</div>

			{/* <div>
				<h2> All Results</h2>
				<table className="info">
					<FullDataList></FullDataList>
				</table>
			</div> */}
		</div>);
	}
}

// class FullDataList extends Component {
// 	render() {
//
// 		return data.map(user => {
//
// 			if(user.Theme != 'BrickHeadz' && user.Theme != 'Gear'){
// 			return (
// 						<tr key={user.SetID}>
// 							<td>{user.index}</td>
// 							<td>{user.SetID}</td>
// 							<td>{user.Number}</td>
// 							{/* <td>{user.Variant}</td> */}
// 							<td>{user.Theme}</td>
// 							<td>{user.Subtheme}</td>
// 							<td>{user.Year}</td>
// 							<td>{user.Name}</td>
// 							<td>{user.Minifigs}</td>
// 							<td>{user.Pieces}</td>
// 							<td><img className="lego-img" src={user.ImageURL}/></td>
// 							<td>UK{user.UKprice} -US${user.USPrice} - CA{user.CAPrice} - EU{user.EUPrice}</td>
//
// 						</tr>
// 			)
// 		}
// 		})
// 	}
// }

// const mapStateToProps = (state) => {
//   return {
// 		minifig: 'Thor'
// 	}
// }
// //connects redux actions to props
// function mapDispatchToProps(dispatch) {
//   return bindActionCreators({
//     chooseMinifig: chooseMinifig,
//   }, dispatch);
// }
export default (App);
