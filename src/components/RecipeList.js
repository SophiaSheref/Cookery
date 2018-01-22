import React, { Component } from 'react';
import { connect } from 'react-redux'; // 5.0.6
import _ from 'lodash'; // 4.17.4
import { Actions } from 'react-native-router-flux'; // 4.0.0-beta.28
import { BottomNavigation } from 'react-native-material-ui'; // 1.19.0
import { COLOR, ThemeProvider } from 'react-native-material-ui'; // 1.19.0
import { Constants } from 'expo';
import { ListView, View, StyleSheet } from 'react-native';

import { recipesFetch, logOut } from '../actions';
import ListItem from './ListItem';

import "redux"; // 3.7.2

import "@expo/vector-icons"; // 6.2.2

const uiTheme = {
    palette: {
        primaryColor: COLOR.green500,
    },
    toolbar: {
        container: {
            height: 50,
        },
    },
};

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
          
      <ListItem recipe={recipe} />
    
    );
    }

	render() {
		return (
		  <View>
			
			<ThemeProvider uiTheme={uiTheme}>
			<View style={styles.container}>
      <ListView
				enableEmptySections
        contentContainerStyle={{ flexDirection: 'column' }}
				dataSource={this.dataSource}
				renderRow={this.renderRow}
			/>
       </View>
      <BottomNavigation hidden={false} >
      <BottomNavigation.Action
            key="add"
            icon="add"
            label="Add"
            onPress={() => Actions.recipeCreate()}
        />
        <BottomNavigation.Action
            key="search"
            icon="search"
            label="Search"
            onPress={() => Actions.recipeSearch()}
        />
        <BottomNavigation.Action
            key="logout"
            icon="settings"
            label="Logout"
            onPress={() => this.props.logOut()}
        />
      </BottomNavigation>
       </ThemeProvider>
			</View>
		);
	}
}

const styles = StyleSheet.create({
  container: {
    height: 550,
    alignItems: 'center',
    justifyContent: 'center',
    paddingTop: Constants.statusBarHeight,
    backgroundColor: '#ecf0f1',
  },
});

const mapStateToProps = state => {
	const recipes = _.map(state.recipes.results, (val, uid) => {
		return { ...val, uid };
	});

	return { recipes };
};

export default connect(mapStateToProps, { recipesFetch, logOut })(RecipeList);