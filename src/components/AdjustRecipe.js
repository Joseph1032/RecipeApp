// STEPS

import React from 'react'
import {addSteps} from '../api/recipes'

export default React.createClass({
	getInitialState() {
		return {
			"id":'',
			"recipeId":'',
			"amount":'',
			"unit":'',
			"ingredient":'',
			"directions":'' // need to be able to add and take out steps (+ -)
		}
	},
	handleSubmit(e) {
		e.preventDefault()
		addSteps(this.state)
	},
	handleChange(e) {
		this.setState({
			[e.target.name]:e.target.value
		})
	},
	render() {
		console.log(this.state)
		return(
			<div>
				<h4>Steps</h4><div id='line'></div>
						<input id='amount' type='text' placeholder='amount' name='amount' onChange={this.handleChange} value={this.state.amount}/>
						<select>
							<option name='unit' onChange={this.handleChange} value={this.state.unit}>Cups</option>
							<option name='unit' onChange={this.handleChange} value={this.state.unit}>Ounces</option>
							<option name='unit' onChange={this.handleChange} value={this.state.unit}>Pounds</option>
							<option name='unit' onChange={this.handleChange} value={this.state.unit}>Teaspoon</option>
							<option name='unit' onChange={this.handleChange} value={this.state.unit}>Tablespoon</option>
							<option name='unit' onChange={this.handleChange} value={this.state.unit}>Fl Oz</option>
							<option name='unit' onChange={this.handleChange} value={this.state.unit}>Pint</option>
							<option name='unit' onChange={this.handleChange} value={this.state.unit}>Quart</option>
							<option name='unit' onChange={this.handleChange} value={this.state.unit}>Gallon</option>
						</select>
						<input id='ingredients' type='text' placeholder='ingredient' name='ingredient' onChange={this.handleChange} value={this.state.ingredient}/>
						<button id='add'>Add</button>
						<textarea placeholder="What directions go with this step?" name='directions' onChange={this.handleChange} value={this.state.directions}></textarea>
					<button id='more' type="submit" onClick={this.handleSubmit}>Add Steps</button>
			</div>
		)
	}
})