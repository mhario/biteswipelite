import './styles/index.scss'
import React, { Component } from 'react'
import { Provider } from 'react-redux'
import YelpTester from './components/YelpTester'
import store from './store'


class App extends Component {
	render() {
		return (
			<Provider store={store}>
				<div className="App">
					<header className="App-header">
						{this.state}
						<YelpTester />
					</header>
				</div>
			</Provider>
		)
	}
}

export default App
