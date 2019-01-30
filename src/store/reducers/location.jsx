const initialState = {
	waiting: false,
	zipCode: '',
	position: {}
}

//
// reducer
export default function(state = initialState, action) {
	const newState = { ...state }

	switch (action.type) {
		case 'SET_POSITION':
			newState.position = action.value
			break

		default:
	}

	return newState
}

//
// action-types
const SET_POSITION = 'SET_POSITION'

//
// action-creators
export const setPosition = position => {
	return {
		type: SET_POSITION,
		value: position
	}
}


//
// actions
export const getLocation = () => {
	return function(dispatch) {
		console.log('doin it')
		navigator.geolocation.getCurrentPosition(pos => {
			console.log('done did it', pos)
			// dispatch(setLocation(pos))
		})
	}
}
