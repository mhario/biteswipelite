const axios = require('axios')

const initialState = {
	loading: false,
	restaurants: []
}

//
// reducer
export default function(state = initialState, action) {
	const newState = { ...state }

	switch (action.type) {
		case 'SET_RESTAURANTS':
			newState.restaurants = action.value
			break
		case 'SET_LOADING':
			newState.loading = action.value
			break
		default:
	}
	
	return newState
}

//
// action types
const SET_RESTAURANTS = 'SET_RESTAURANTS'
const SET_LOADING = 'SET_LOADING'

//
// action creators
export const setRestaurants = restaurants => {
	return { type: SET_RESTAURANTS,
		value: restaurants }
}

export const setLoading = isLoading => {
	return { type: SET_LOADING,
		value: isLoading }
}

export const requestRestaurants = () => {
	// return axios.get('http://localhost:8080/api/search?query=hotdogs')
	// 	.then(res => console.log('response', res))
	return function(dispatch) {
		dispatch(setLoading(true))

		return axios({
			method: 'get',
			url: 'http://localhost:8080/api/search?query=hotdogs and beer'
			// params: {
			// 	term: req.query.query,
			// 	latitude: 37.786882,
			// 	longitude: -122.399972
			// }
		})
		.then(response => {
			console.log('response in the reducer is', response)
			dispatch(setRestaurants(response.data.businesses))
		})

	}

}

