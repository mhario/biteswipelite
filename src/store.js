import { createStore, applyMiddleware, compose } from 'redux'
import thunk from 'redux-thunk'
import rootReducer from './reducers'

const chromeDevTools = window.__REDUX_DEVTOOLS_EXTENSION__

const store = createStore(
	rootReducer,
	compose(
		applyMiddleware(thunk),
		chromeDevTools && chromeDevTools()
	)
)

export default store
