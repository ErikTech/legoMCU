import React, { Component } from 'react';
import './styles/App.scss';
// import Menu from "./components/Menu";
// import { Link } from 'react-router-dom'


class App extends Component {
  render() {
    return (
      <div className="App">
        {/* <Menu /> */}

        <div className="container">
          {this.props.children}
        </div>
      </div>
    );
  }
}


export default App;
