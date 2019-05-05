const initState = {
	hasResults: false, // has 'maxMaybes' been hit?
	hasSingleResult: false,
	maybes: []
}

const MAX_MAYBES = 3

//
// action-types
const ADD_MAYBE = 'ADD_MAYBE'

// reducer
export default function(state = initState, action) {
	const newState = { ...state }

	switch (action.type) {
		case ADD_MAYBE:
			newState.maybes.push(action.value)
			if (newState.maybes.length === MAX_MAYBES) {
				newState.hasResults = true
			}
			break

		default:
	}

	return newState

}

//
// action creators
export const addMaybe = spot => {
	return {
		type: ADD_MAYBE,
		value: spot
	}
}
