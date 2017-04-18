// Page 2

import React from 'react'
import {addRecipes} from '../api/recipes'
import AdjustRecipe from './AdjustRecipe'
import TextField from 'material-ui/TextField'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import Checkbox from 'material-ui/Checkbox';
import SelectField from 'material-ui/SelectField';
import DropDownMenu from 'material-ui/DropDownMenu';
import MenuItem from 'material-ui/MenuItem';

export default React.createClass({
	getInitialState() {
		return {
			id:'',
			name:'',
			by:'',
			type:'',
			prepTime:'',
			cookTime:'',
			cookTemp:'',
			tempType:'',
			servingAmount:'',
			servingType:'',
			photo:'',
			status:''
		}
	},
	handleSubmit(e) {
		e.preventDefault() 
		addRecipes(this.state)
	},
	handleChange(e) {
		this.setState({
			[e.target.name]:e.target.value 
		})
	},
	handleBack(e) {
		e.preventDefault()
		this.props.history.push("/")
	},
	render() {
		return(
			<MuiThemeProvider>
			<form>
				<div className="container">
				<h4>Basic Info</h4><div id='lineTwo'></div>
					<div id="name">
						<TextField hintText="Recipe Name" onChange={this.handleChange} name='name' value={this.state.name}/><br />
						<TextField hintText="By" onChange={this.handleChange} name='by' value={this.state.by}/><br />
	    			</div>
	    			<div id="status">
		    			<Checkbox label="Make it Public"  onChange={this.handleChange} name='status' value={this.state.status}/>
		    			<Checkbox label="Keep it Private" onChange={this.handleChange} name='status' value={this.state.status}/>
	    			</div>
	    			<div id="meal">
		    			<SelectField floatingLabelText="Recipe Type" style={{width:200}} onChange={this.handleChange}>
		    				<MenuItem onChange={this.handleChange} name='type' value={this.state.type} primaryText="Breakfast"/>
		    				<MenuItem onChange={this.handleChange} name='type' value={this.state.type} primaryText="Lunch"/>
		    				<MenuItem onChange={this.handleChange} name='type' value={this.state.type} primaryText="Dinner"/>
		    				<MenuItem onChange={this.handleChange} name='type' value={this.state.type} primaryText="Dessert"/>
		    			</SelectField>
		    		</div>
	    			<div id="directions">
		    			<TextField hintText="Prep Time" style={{width:100, margin:10}} onChange={this.handleChange} name='prepTime' value={this.state.prepTime}/>
		    			<TextField hintText="Cook Time" style={{width:100, margin:10}} onChange={this.handleChange} name='cookTime' value={this.state.cookTime}/>
		    			<TextField hintText="Cook Temp" style={{width:100, margin:10}} onChange={this.handleChange} name='cookTemp' value={this.state.cookTemp}/>
		    			<DropDownMenu value="&#x2109;">
			    			<MenuItem onChange={this.handleChange} name='tempType' value={this.state.tempType} primaryText="&#x2109;"/>
			    			<MenuItem onChange={this.handleChange} name='tempType' value={this.state.tempType} primaryText="&#x2103;"/>
			    		</DropDownMenu>
		    		</div>
    			<p id="paragraph">This recipe will make</p>
    				<div id="serving">
		    			<TextField hintText="Amount" style={{width:100, margin:10}} onChange={this.handleChange} name='servingAmount' value={this.state.servingAmount}/>
		    			<TextField hintText="cookies, loaves, etc" onChange={this.handleChange} name='servingType' value={this.state.servingType}/>
					</div>
					<button id='save' onClick={this.handleSubmit}>Save This Recipe</button>
					<AdjustRecipe />
				</div> 
				<button onClick={this.handleBack}>Back To Recipe List</button>
			</form>
			</MuiThemeProvider>
			
		)
	}
})