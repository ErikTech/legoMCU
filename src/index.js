import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { createStore } from 'redux';
import Reducer from './reducers';


let store = createStore(Reducer);

function render(){
	ReactDOM.render(
		<div><App store={store} /><hr /></div>,
		document.getElementById('root')
	);

}

store.subscribe(render);

render();
