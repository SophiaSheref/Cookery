//Import dependencies
import React, { Component } from 'react';
import { ScrollView } from 'react-native';
import _ from 'lodash'; // 4.17.4
import { connect } from 'react-redux'; // 5.0.6
import RecipeForm from './RecipeForm';
import { recipeUpdate, recipeSave, recipeDelete } from '../actions';
import { Button, ConfirmModal } from './common';

import "redux"; // 3.7.2

//Create RecipeEdit component
class RecipeEdit extends Component {

	//Set initial component-level state
	state= { showModal: false };

	//Before component mounts:
	componentWillMount() {
		//Converts recipe object to an array and for each prop
		_.each(this.props.recipe, (value, prop) => {
			//Calls action which sets prop-value pair in state
			//This effectively pre-populates the form with recipe data
			this.props.recipeUpdate({ prop, value });
		});
	}

	//When save button pressed:
	onButtonPress() {
		//Destructure props
		const { name, ingredients, steps, servings, prep, cook, notes, cals, carbs, protein, fat, vegetarian, vegan, glutenfree, dairyfree, uid } = this.props;
		//Call recipeSave action for the specified (uid) recipe
		this.props.recipeSave({name, ingredients, steps, servings, prep, cook, notes, cals, carbs, protein, fat, vegetarian, vegan, glutenfree, dairyfree, uid });
	}

	//What happens when Yes is pressed in modal
	onAccept() {
		//Grab recipe ID
		this.setState({ showModal: false });
		const { uid } = this.props;
		//Call delete action with specified ID
		this.props.recipeDelete({ uid });
	}

	//When No is pressed in Modal
	onDecline() {
		//Show modal is set to false
		this.setState({ showModal: false });
	}

	render() {
		return (
      <ScrollView 
				contentContainerStyle={{ flexGrow: 1 }}
				scrollEnabled
			>
				<RecipeForm {...this.props} />
				<Button onPress={this.onButtonPress.bind(this)}>
				Save Changes
			</Button>
			<Button onPress={() => this.setState({ showModal: !this.state.showModal })}>
				Delete Recipe
			</Button>
			<ConfirmModal 
				visible={this.state.showModal}
				onAccept={this.onAccept.bind(this)}
				onDecline={this.onDecline.bind(this)}
			>
			'Are you sure you wish to delete this recipe?'
			</ConfirmModal>
			</ScrollView>

		);
	}
}

//Passes in selected state properties as props to component
const mapStateToProps = (state) => {
	const { name, ingredients, steps, servings, prep, cook, notes, cals, carbs, protein, fat, vegetarian, vegan, glutenfree, dairyfree, uid } = state.recipeForm;
	return { name, ingredients, steps, servings, prep, cook, notes, cals, carbs, protein, fat, vegetarian, vegan, glutenfree, dairyfree, uid };
};

export default connect(mapStateToProps, { recipeUpdate, recipeSave, recipeDelete })(RecipeEdit);