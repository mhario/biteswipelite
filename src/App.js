import React, { Component } from 'react';
import { Provider } from 'react-redux';

import store from './store';
import './styles/index.scss';

import YelpTester from './components/YelpTester'

class App extends Component {
	render() {
		return (
			<Provider store={store}>
				<div className="App">
					<header className="App-header">
						<YelpTester />
					</header>
				</div>
			</Provider>
		);
	}
}

export default App;
