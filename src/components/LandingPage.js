import React, { Component } from 'react';
import {
  AppRegistry, StyleSheet, ScrollView, View
 
} from 'react-native';
import LoginForm from './LoginForm';
// import Cookerytitle from './CookeryTitle';

 
export default class Myproject extends Component {

  render() {
 
    return (
       
      <ScrollView style = {styles.MainContainer}>
      <View style= {{flex:1}}>
   
        <LoginForm />
          </View>
      </ScrollView>
     
        
    );
  }
}
 

const styles = StyleSheet.create(
{
 
MainContainer: 
{

flexGrow: 1,
paddingTop: 0,

 
// Set content's vertical alignment.


 
// Set content's horizontal alignment.

 
// Set hex color code here.
backgroundColor: '#FFFFFF'
}
 
});
 
AppRegistry.registerComponent('Myproject', () => Myproject);