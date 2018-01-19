import React, { Component } from 'react';
import { Text, TouchableWithoutFeedback, View } from 'react-native';
import { Actions } from 'react-native-router-flux'; // 4.0.0-beta.28
import { CardSection } from './common';

class ListItem extends Component {
	onRowPress() {
		Actions.recipeEdit({ recipe: this.props.recipe });
	}

	render() {
		const { name, cook, prep, servings } = this.props.recipe;

		return (
			<TouchableWithoutFeedback onPress={this.onRowPress.bind(this)}>

			<CardSection style={{ flexDirection: 'column', flex: 1 }}>
			<Text style={styles.titleStyle}>
				{name}
			</Text>
			<View >
				<Text>
					Prep Time: {prep}
				</Text>
				<Text>
					Cook Time: {cook}
				</Text>
				<Text>
					Servings: {servings}
				</Text>
			</View>
			</CardSection>

			</TouchableWithoutFeedback>
		);
	}
}

const styles = {
	titleStyle: {
		fontSize: 18,
		paddingLeft: 15
	}
};

export default ListItem;
