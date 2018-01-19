//Libraries
import React from 'react';
import { Text, View } from 'react-native';

//Component
const Header = (props) => {
	const { textStyle, viewStyle } = styles;
	return (
		<View style={viewStyle}>
			<Text style={textStyle}>{props.headerText}</Text>
		</View>
	);
};

const styles = {
	viewStyle: {
		backgroundColor: '#f3f3f3',
		justifyContent: 'center',
		alignItems: 'center',
		height: 60,
		paddingTop: 15,
		shadowColor: '#008080',
		shadowOffset: { width: 0, height: 10 },
		shadowOpacity: 0.7,
		elevation: 5,
		position: 'relative'
	},
	textStyle: {
		fontSize: 20
	}
};

//Export
export { Header };
