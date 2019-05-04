const axios = require('axios')

const initialState = {
	loading: false,
	spots: []
}

//
// reducer
export default function(state = initialState, action) {
	const newState = { ...state }
	
	switch (action.type) {
		case 'SET_SPOTS':
			newState.spots = action.value
			break
		case 'SET_LOADING':
			newState.loading = action.value
			break
		case 'SHIFT_SPOT':
			newState.spots.shift()
			break

		default:
	}

	return newState
}

//
// action types
const SET_SPOTS = 'SET_SPOTS'
const SET_LOADING = 'SET_LOADING'
const SHIFT_SPOT = 'SHIFT_SPOT'

//
// action creators
export const setSpots = spots => {
	return { type: SET_SPOTS,
		value: spots }
}

export const setLoading = isLoading => {
	return { type: SET_LOADING,
		value: isLoading }
}

export const requestSpots = params => {
	return function(dispatch, getRootState) {
		dispatch(setLoading(true))

		const { latitude, longitude } = getRootState().location.coords

		return axios({
			method: 'get',
			url: 'http://localhost:8080/api/search',
			params: {
				latitude,
				longitude,
				...params
			}
		})
		.then(response => {
			dispatch(setSpots(response.data.businesses))
		})
	}
}

export const shiftSpot = () => {
	return {
		type: SHIFT_SPOT,
		value: null
	}
}
