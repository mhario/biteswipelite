const initState = {
	mode: '',
	maxDistance: 0,
	drinks: false,
	isSetup: false
}

//
// action-types
const SET_MODE = 'SET_MODE'
const SET_DISTANCE = 'SET_DISTANCE'
const SET_DRINKS = 'SET_DRINKS'
const SET_IS_SETUP = 'SET_IS_SETUP'

//
// reducer
export default function(state = initState, action) {
	const newState = { ...state }

	switch (action.type) {
		case SET_MODE:
			newState.mode = action.value
			break
		case SET_DISTANCE:
			newState.maxDistance = action.value
			break
		case SET_DRINKS:
			newState.drinks = action.value
			break
		case SET_IS_SETUP:
			newState.isSetup = action.value
			break

		default:
	}

	return newState
}

//
// actions
export const setMode = mode => ({
	type: SET_MODE,
	value: mode
})

export const setDistance = distance => ({
	type: SET_DISTANCE,
	value: distance
})

export const setDrinks = drinks => ({
	type: SET_DRINKS,
	value: drinks
})

export const setIsSetup = drinks => ({
	type: SET_IS_SETUP,
	value: drinks
})

