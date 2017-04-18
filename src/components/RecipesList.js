// HOME 
import React from 'react'
import {Link} from 'react-router-dom'

export default React.createClass({


	render() {
		return (
			<div>
				<p className="nav">My Recipes</p>
				<ul className="myRecipes">
				<Link to='/recipes'>
					<li>ADD RECIPE</li>
				</Link>
					<li></li>
					<li></li>
					<li></li>
					<li></li>
				</ul>
				<p className="nav">Public Recipes</p>
				<ul className="publicRecipes">
					<li></li>
					<li></li>
					<li></li>
					<li></li>
					<li></li>
				</ul>
				<p className="nav">Popular Recipes</p>
				<ul className="popRecipes">				
					<li></li>
					<li></li>
					<li></li>
					<li></li>
					<li></li>
				</ul>
				<p className="nav">My Favorite Recipes</p>
				<ul className="favorites">				
					<li></li>
					<li></li>
					<li></li>
					<li></li>
					<li></li>
				</ul>
				<p className="nav">My Pantry</p>
				<ul className="pantry">				
					<li></li>
					<li></li>
					<li></li>
					<li></li>
					<li></li>
				</ul>
			</div>
		)
	}
})