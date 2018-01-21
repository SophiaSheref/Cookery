import React, { Component } from 'react';
import _ from 'lodash'; // 4.17.4
import { connect } from 'react-redux'; // 5.0.6
import { StyleSheet, Text, View, Button, ScrollView } from 'react-native';
import { recipeUpdate } from '../actions';
import TextList from './TextList';

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
      <View 
      style={{
        flex: 1,
        flexDirection: 'column',
        // backgroundColor: 'blue',
        paddingTop: 24
      }}>
        <ScrollView>
          <View style={{
            flex: 1,
            flexDirection: 'column',
            height: 300,
            // backgroundColor: 'red'
          }}>
            <View style={{
              alignItems: 'center',
              flexDirection: 'row',
              flex: 2,
              justifyContent: 'center',
              // backgroundColor: 'pink'
            }}>
              <Text style={{ fontSize: 50 }}>{this.props.name}</Text>
            </View>
            <View style={{
              alignItems: 'center',
              flexDirection: 'row',
              flex: 1,
              justifyContent: 'center',
              // backgroundColor: 'purple'
            }}>
              <View style={{ alignItems: 'center', justifyContent: 'center', flex: 1 }}>
                <Text style={{ fontSize: 20 }}>Serving Size</Text>
                <Text style={{ fontSize: 25 }}>{this.props.servings} people</Text>
              </View>
              <View style={{ alignItems: 'center', justifyContent: 'center', flex: 1 }}>
                <Text style={{ fontSize: 20 }}>Prep time</Text>
                <Text style={{ fontSize: 25 }}>{this.props.prep} min</Text>
              </View>
              <View style={{ alignItems: 'center', justifyContent: 'center', flex: 1 }}>
                <Text style={{ fontSize: 20 }}>Cook Time</Text>
                <Text style={{ fontSize: 25 }}>{this.props.cook} min</Text>
              </View>
            </View>
          </View>
          <View style={{
            flexDirection: 'column',
            flex: 1,
            alignItems: 'center',
            // backgroundColor: 'orange'
          }}>
            <View style={{
              flex: 1,
              flexDirection: 'row',
              justifyContent: 'center',
              alignItems: 'center'
            }}>
              <Text style={{ fontSize: 30 }}>Ingredients</Text>
            </View>
            <TextList listItems={this.props.ingredients} size="20" multiCol="true" />
          </View>
          <View style={{
            flex: 1,
            flexDirection: 'column',
            justifyContent: 'flex-start',
            paddingLeft: 10,
            paddingRight: 10
          }}>
            <View style={{
              flexDirection: 'row',
              flex: 1,
              justifyContent: 'center'
            }}>
              <Text style={{ fontSize: 30 }}>Instructions</Text>
            </View>
            <TextList listItems={this.props.steps} size="20" multiCol="false" />
          </View>
        </ScrollView>
      </View>
    );
  }
}

//Passes in selected state properties as props to component
const mapStateToProps = (state) => {
  const { name, ingredients, steps, servings, prep, cook } = state.recipeForm;
  return { name, ingredients, steps, servings, prep, cook };
};

export default connect(mapStateToProps, { recipeUpdate })(Recipe);