import React from 'react';
import {BrowserRouter as Router, Route} from 'react-router-dom'
import Recipes from './RecipesForm'
import RecipesList from './RecipesList'

import './styles.css'


export default React.createClass({
  render() {
    return (
    <Router>
    	<div>
      		<Route exact={true} path="/" component={RecipesList}/>
      		<Route path="/recipes" component={Recipes}/>
      		
     	</div>
    </Router>
    )
  }
})