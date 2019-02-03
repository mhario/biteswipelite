import './styles/index.scss'
import React, { Component } from 'react'
import { Provider } from 'react-redux'
import SetupScreen from './containers/SetupScreen'
import store from './store/store'

class App extends Component {
	constructor() {
		super()
		this.state = {
			isSetup: false,
		}
	}

	render() {
		return (
			<Provider store={store}>
				<div className="App">
					{
						!this.state.isSetup && (
							<SetupScreen />
						)
					}
				</div>
			</Provider>
		)
	}
}

export default App
