import React, { Component } from 'react';
import { ScrollView } from 'react-native';
import { connect } from 'react-redux'; // 5.0.6
import { recipeUpdate, recipeCreate, clearForm } from '../actions';
import { CardSection, Button } from './common';
import RecipeForm from './RecipeForm';

import "redux"; // 3.7.2

class RecipeCreate extends Component {
  
  componentWillMount() {
    this.props.clearForm();
  }

	onButtonPress() {
	const { 
      name, 
      ingredients, 
      steps, 
      servings, 
      prep, 
      cook, 
      notes, 
      cals, 
      carbs, 
      protein, 
      fat, 
      vegetarian, 
      vegan, 
      glutenfree, 
      dairyfree 
    } = this.props;

	this.props.recipeCreate({ 
		name, 
      ingredients, 
      steps, 
      servings, 
      prep, 
      cook, 
      notes, 
      cals, 
      carbs, 
      protein, 
      fat, 
      vegetarian, 
      vegan, 
      glutenfree, 
      dairyfree });
	}

	render() {
		return (
			<ScrollView 
				contentContainerStyle={{ flexGrow: 1 }}
				scrollEnabled
			>
				<RecipeForm {...this.props} />
				<CardSection>
					<Button onPress={this.onButtonPress.bind(this)}>Create Recipe</Button>
				</CardSection>
			</ScrollView>
		);
	}
}

const mapStateToProps = (state) => {
  const { 
      name, 
      ingredients, 
      steps, 
      servings, 
      prep, 
      cook, 
      notes, 
      cals, 
      carbs, 
      protein, 
      fat, 
      vegetarian, 
      vegan, 
      glutenfree, 
      dairyfree 
    } = state.recipeForm;

  return { name, 
      ingredients, 
      steps, 
      servings, 
      prep, 
      cook, 
      notes, 
      cals, 
      carbs, 
      protein, 
      fat, 
      vegetarian, 
      vegan, 
      glutenfree, 
      dairyfree };
};

export default connect(mapStateToProps, { recipeUpdate, recipeCreate, clearForm })(RecipeCreate);