import React from 'react';
import { Text, TouchableOpacity } from 'react-native';

const Button = ({ onPress, children }) => {
	const { buttonStyle, textStyle } = styles;


	return (
		<TouchableOpacity onPress={onPress} style={buttonStyle}>
			<Text style={textStyle}>{children}</Text>
		</TouchableOpacity>
	);
};

const styles = {
	textStyle: {
		alignSelf: 'center',
		color: '#fff',
		fontSize: 18,
		fontWeight: '600',
		paddingTop: 10,
		paddingBottom: 10,
		fontFamily: 'OpenSans'
	},
	buttonStyle: {
		flex: 1,
		alignSelf: 'stretch',
		backgroundColor: '#ba3748',
		borderColor: '#ba3748',
		borderRadius: 5,
		borderWidth: 1,
		marginLeft: 5,
		marginRight: 5,
		marginBottom: 10
	}
};

export { Button };
