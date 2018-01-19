import React, { Component } from 'react';
import { connect } from 'react-redux'; // 5.0.6
import _ from 'lodash'; // 4.17.4
import { ListView } from 'react-native';
import { recipesFetch } from '../actions';
import ListItem from './ListItem';

import "redux"; // 3.7.2

class RecipeList extends Component {
	componentWillMount() {
		this.props.recipesFetch();
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
      <ListItem recipe={recipe} style={{ flex: 0.5 }} />
    );
	}

	render() {
		return (
			<ListView
				enableEmptySections
        contentContainerStyle={{ flex: 1, flexDirection: 'row' }}
				dataSource={this.dataSource}
				renderRow={this.renderRow}
			/>
		);
	}
}

const mapStateToProps = state => {
	const recipes = _.map(state.recipes, (val, uid) => {
		return { ...val, uid };
	});

	return { recipes };
};

export default connect(mapStateToProps, { recipesFetch })(RecipeList);


//Implement this new layout: 

//Layout for Recipe List 
/*
import React, { Component } from 'react';
import {
  StyleSheet,
  View
} from 'react-native';
 
export default class GridLayout extends Component {
  render() {
    return (
      <View style={styles.container}>
      {/* Header
          <View style={styles.row}>
            <View style={[styles.box, styles.box2]}></View>            
          </View>
           {/* Navbar 
          <View style={styles.row}>
            <View style={[styles.box, styles.box2]}></View>
          </View>
 	  {/* Content row 
          <View style={styles.row}>
            <View style={[styles.box, styles.box]}></View>
            <View style={[styles.box, styles.box3]}></View>
          </View>
      {/* Content row 
          <View style={styles.row}>
            <View style={[styles.box, styles.box]}></View>
            <View style={[styles.box, styles.box3]}></View>
          </View>
      {/* Footer 
          <View style={styles.row}>
            <View style={[styles.box, styles.box2]}></View>
          </View>
      </View>
    );
  }
}
 
const styles = StyleSheet.create({
  row: {
    
    flexDirection: 'row',
    marginBottom: 10
  },
  box: {
   flex: 1,
    backgroundColor: 'aqua',
  },

  box2: {
    height: 105,
    backgroundColor: 'blue'

  },
  box3: {
    height: 156,
    backgroundColor: 'purple'
  }
});
*/