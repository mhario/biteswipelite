const initState = {
	mode: ''
}

//
// reducer
export default function(state = initState, action) {
	const newState = { ...state }

	switch (action.type) {
		case 'SET_MODE':
			newState.mode = action.value
			break

		default:
	}

	return newState
}

//
// action-types
const SET_MODE = 'SET_MODE'

//
// actions
export const setMode = mode => ({
	type: SET_MODE,
	value: mode
})
