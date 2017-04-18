import * as actions from '../actions'

const initialState = {
	recipes: [],
	steps: []
}

export default function(state = initialState, action) {
	switch(action.type) {
		case actions.GET_RECIPES:
			return {...state, recipes:action.recipes}
		case actions.GET_STEPS:
			return {...state, steps:action.steps}
		default:
			return state
	}
}