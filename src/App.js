import './styles/index.scss'
import React, { Component } from 'react'
import { Provider } from 'react-redux'
import View from './containers/View'
import store from './store/store'

class App extends Component {

	render() {
		return (
			<Provider store={store}>
				<div className="App">
					<View />
				</div>
			</Provider>
		)
	}
}

export default App
