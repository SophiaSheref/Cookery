import React from 'react';
import {Text} from 'react-native';


const Header = ( ) => {
  const {textStyle} =styles;
  return <Text style = {textStyle}>Cookery</Text>
};

const styles= {
  
   textStyle: {
		alignSelf: 'center',
		color: '#ddd',
		fontSize: 50,
		fontWeight: 'bold',
		paddingTop: 20,
		paddingBottom: 20
		
		
	},
     
  
}
export default Header;