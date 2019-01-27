export default function(state = {}, action) {
	const newState = Object.assign({}, state)
	switch(action.type) {
		case 'SET_RESTAURANTS':
			newState.restaurants = action.value
			break
		default:
	}
	return newState
}



const SET_RESTAURANTS = 'SET_RESTAURANTS';



export const setRestaurants = restaurants => {
	return { type: SET_RESTAURANTS, value: restaurants }
}
