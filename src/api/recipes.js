import store from '../store'
import axios from 'axios'
import * as actions from '../actions.js'

export function getRecipes() {
	axios.get('http://localhost:3001/recipes').then(results=>{
		store.dispatch({
			type:actions.GET_RECIPES,
			recipes: results.data
		})
	})
}

export function getSteps() {
	axios.get('http://localhost:3001/steps').then(results=>{
		store.dispatch({
			type:actions.GET_STEPS,
			steps: results.data
		})
	})
}

export function addRecipes(obj) {
	axios.post('http://localhost:3001/recipes/', obj).then(results=>{
		getRecipes()
	})
}

export function addSteps(obj) {
	axios.post('http://localhost:3001/steps/', obj).then(results => {
		getSteps()
	})
}