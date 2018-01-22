import React, { Component } from 'react';
import _ from 'lodash'; // 4.17.4
import { connect } from 'react-redux'; // 5.0.6
import { Text, View, ScrollView } from 'react-native';
import RecipeStyle from './RecipeStyle';
import { recipeUpdate } from '../actions';
import TextList from './TextList';
import Diet from './Diet';

import "redux"; // 3.7.2

{/* <Recipe title="[title]" serving='[serving]' prep="[time in minutes]" cook="[time in minutes]" ingredients="[string of text split by splitChar]" splitChar='[define the split character]' instructions="[string of text split by splitChar]"/> */}

class Recipe extends Component {

  //Before component mounts:
  componentWillMount() {
    //Converts recipe object to an array and for each prop
    _.each(this.props.recipe, (value, prop) => {
      //Calls action which sets prop-value pair in state
      //This effectively pre-populates the form with recipe data
      this.props.recipeUpdate({ prop, value });
    });
  }

  render() {
    return (
  <View style={RecipeStyle.primary}>
      <ScrollView>
        <View style={RecipeStyle.header}>
          <View style={RecipeStyle.titleBox}>
            <Text style={RecipeStyle.title}>{this.props.name}</Text>
          </View>
          <View style={RecipeStyle.infoBar}>
            <View style={RecipeStyle.infoBox}>
              <Text style={RecipeStyle.infoText}>Serving Size</Text>
              <Text style={RecipeStyle.genText}>{this.props.servings} people</Text>
            </View>
            <View style={RecipeStyle.infoBox}>
              <Text style={RecipeStyle.infoText}>Prep time</Text>
              <Text style={RecipeStyle.genText}>{this.props.prep} min</Text>
            </View>
            <View style={RecipeStyle.infoBox}>
              <Text style={RecipeStyle.infoText}>Cook Time</Text>
              <Text style={RecipeStyle.genText}>{this.props.cook} min</Text>
            </View>
          </View>
          
        <View style={RecipeStyle.instructionsBox}>
          <View style={RecipeStyle.titleBoxTwo}>
            <Text style={RecipeStyle.subTitle}>Ingredients</Text>
          </View>
          <TextList listItems={this.props.ingredients} size="17" splitChar={this.props.splitChar} multiCol="true" align="flex-start" color="#505050" fontFamily = "OpenSans"/>
        </View>
        <View style={RecipeStyle.instructionsBox}>
          <View style={RecipeStyle.titleBoxTwo}>
            <Text style={RecipeStyle.subTitle}>Instructions</Text>
          </View>
          <TextList listItems={this.props.steps} size="17" splitChar={this.props.splitChar} multiCol="false" align="flex-start" color="#505050" fontFamily = "OpenSans"/>
        </View>
        <View style={RecipeStyle.infoBar}>
            <View style={RecipeStyle.infoBox}>
              <Text style={RecipeStyle.infoText}>Calories</Text>
              <Text style={RecipeStyle.genText}>{this.props.cals} cal</Text>
            </View>
            <View style={RecipeStyle.infoBox}>
              <Text style={RecipeStyle.infoText}>Fat</Text>
              <Text style={RecipeStyle.genText}>{this.props.fat} grams</Text>
            </View>
          </View>
          <View style={RecipeStyle.infoBar}>
            <View style={RecipeStyle.infoBox}>
              <Text style={RecipeStyle.infoText}>Protein</Text>
              <Text style={RecipeStyle.genText}>{this.props.protein} grams</Text>
            </View>
            <View style={RecipeStyle.infoBox}>
              <Text style={RecipeStyle.infoText}>Carbs</Text>
              <Text style={RecipeStyle.genText}>{this.props.carbs} grams</Text>
            </View>
          </View>
          <View style={RecipeStyle.infoBar}>
            <Diet glutenFree={this.props.glutenfree} dairyFree={this.props.dairyfree} vegan={this.props.vegan} vegetarian={this.props.vegetarian}/>
          </View>
        </View>
      </ScrollView>
    </View>
    );
  }
}

//Passes in selected state properties as props to component
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
      dairyfree } = state.recipeForm;
  return { 
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
      dairyfree };
};

export default connect(mapStateToProps, { recipeUpdate })(Recipe);