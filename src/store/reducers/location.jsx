const initialState = {
	isKnown: false,
	isWaiting: false,
	zipCode: -1,
	coords: {}
}

//
// reducer
export default function(state = initialState, action) {
	const newState = { ...state }

	switch (action.type) {
		case 'SET_POSITION':
			newState.coords = action.value
			newState.isKnown = true
			break
			
		case 'SET_ZIP':
			newState.zipCode = action.value
			newState.isKnown = true
			break

		case 'SET_WAITING':
			newState.isWaiting = action.value
			break

		default:
	}

	return newState
}

//
// action-types
const SET_POSITION = 'SET_POSITION'
const SET_ZIP = 'SET_ZIP'
const SET_WAITING = 'SET_WAITING'

//
// action-creators
export const setPosition = position => {
	return {
		type: SET_POSITION,
		value: position
	}
}
export const setZip = zip => {
	return {
		type: SET_ZIP,
		value: zip
	}
}
export const setWaiting = waiting => {
	return {
		type: SET_WAITING,
		value: waiting
	}
}

//
// actions
export const getLocation = () => {
	return function(dispatch) {
		navigator.geolocation.getCurrentPosition(pos => {
			dispatch(setPosition(pos))
		})
	}
}
