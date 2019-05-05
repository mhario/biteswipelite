import { combineReducers } from 'redux'

export default combineReducers({
	location: require('./location').default,
	spots: require('./spots').default,
	setup: require('./setup').default,
	results: require('./results').default
})
