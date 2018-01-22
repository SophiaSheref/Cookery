import React, { Component } from 'react';
import { connect } from 'react-redux'; // 5.0.6
import _ from 'lodash'; // 4.17.4
import { ListView, View, StyleSheet } from 'react-native';
import { SearchBar } from 'react-native-elements'; // 0.19.0
import { recipeSearch, searchUpdate } from '../actions';
import ListItem from './ListItem';

import "redux"; // 3.7.2

import "@expo/vector-icons"; // 6.2.2

class RecipeSearch extends Component {
  componentWillMount() {
		this.createDataSource(this.props);
	}
	
	componentWillReceiveProps(nextProps) {
		this.createDataSource(nextProps);
	}

	createDataSource({ recipes }) {
		const ds = new ListView.DataSource({
			rowHasChanged: (r1, r2) => r1 !== r2
		});

		this.dataSource = ds.cloneWithRows(recipes);
	}

	renderRow(recipe) {
		return (
      <ListItem recipe={recipe} />
    );
	}
	
	onSearchChange(text){
	  this.props.searchUpdate(text);
	}
	
	triggerSearch(query){
	 this.props.recipeSearch(query);
	}

	render() {
		return (
		  <View>
		  <View style = {styles.container}>
           <SearchBar
           returnKeyType='search'
           value={this.props.query}
           onChangeText={this.onSearchChange.bind(this)}
           onSubmitEditing={event => this.triggerSearch(event.nativeEvent.text)}
            lightTheme
            icon={{ type: 'font-awesome', name: 'search' }}
            placeholder='Type Here...' />
      </View>
			<ListView
				enableEmptySections
        contentContainerStyle={{ flexDirection: 'column',  }}
				dataSource={this.dataSource}
				renderRow={this.renderRow}
			/>
			</View>
		);
	}
}

const styles = StyleSheet.create({
  container:{
    margin:10,
    width: 355,
  },
});

const mapStateToProps = state => {
	const recipes = _.map(state.recipes.search, (val, uid) => {
		return { ...val, uid };
	});
	const query = state.recipes.query;

	return { recipes, query };
};

export default connect(mapStateToProps, { recipeSearch, searchUpdate })(RecipeSearch);