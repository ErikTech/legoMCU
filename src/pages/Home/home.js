import React from "react";
import logo from '../../logo.svg';


// Movies page component
export default class HomePage extends React.Component {
  // render
  render() {
    return (
			<div>
			<header className="App-header">
				<img src={logo} className="App-logo" alt="logo" />
				<p>
					LegoMCU-v3 - Erik Lopez
				</p>
			</header>
		</div>
    );
  }
}
