import { combineReducers } from 'redux'

export default combineReducers({
	location: require('./location').default,
	destinations: require('./destinations').default,
	setup: require('./setup').default
})
