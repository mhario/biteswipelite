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

export const requestRestaurants = search => {
	return function(dispatch, getRootState) {
		dispatch(setLoading(true))

		const { latitude, longitude } = getRootState().location.coords

		return axios({
			method: 'get',
			url: 'http://localhost:8080/api/search',
			params: {
				query: search,
				latitude,
				longitude

			}
		})
		.then(response => {
			dispatch(setRestaurants(response.data.businesses))
		})
	}
}
