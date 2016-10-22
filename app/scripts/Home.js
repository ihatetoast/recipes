import React from 'react';
import Recipes from './Recipes';
import RecipeThumb from './RecipeThumb';
import { Link } from 'react-router';

export default React.createClass({
	getInitialState: function() {
		return {recipes: Recipes};
	},
	// componentDidMount: function() {
	// 	// Recipes.on('update', this.updateRecipes);
	// 	Recipes.fetch();
	// },
	// componentWillUnmount: function() {
	// 	Recipes.off('update');
	// },
	// updateRecipes: function() {
	// 	this.setState({Recipes: Recipes});
	// },
	filter: function() {
		console.log(this.state.recipes);
		let courses = this.state.recipes.filter((course, i) => {
			if(course === 'main') {
				return true;
			} else {
				return false;
			}
		});
		this.setState({recipes: courses});
	},
	render: function() {
		const recipes = this.state.recipes.sort(function(a,b) {
			let nameA = a.name.toLowerCase();
			let nameB = b.name.toLowerCase();
			if (nameA < nameB) {
				return -1;
			}
			if (nameA > nameB) {
				return 1;
			}
			return 0;
		}).map((recipe, i) => {
			return (
			<RecipeThumb
				key={i}
				id={i}
				image={recipe.image}
				name={recipe.name}
				/>);
		});
		return (
			<div>	
				<div className="addNew">
					<Link to="/new" className="button">Add a Recipe</Link>
				</div>
				<label htmlFor="courseFilter">Filter by:</label>
				<select id="courseFilter" onClick={this.filter}>
					<option value="main">Main Dishes</option>
					<option value="sides">Sides</option>
					<option value="soups">Soups</option>
					<option value="seasonings">Seasonings</option>
				</select>
				<div className="grid">
					{recipes}
				</div>
			</div>
		);
	}
});