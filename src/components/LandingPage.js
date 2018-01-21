import React, { Component } from 'react';
import {
  AppRegistry, StyleSheet, ScrollView
 
} from 'react-native';
import LoginForm from './LoginForm';
import Cookerytitle from './CookeryTitle';

 
export default class Myproject extends Component {

  render() {
 
    return (
 
      <ScrollView style = {styles.MainContainer}>
      <Cookerytitle/>
        <LoginForm />
      </ScrollView>
        
    );
  }
}
 

const styles = StyleSheet.create(
{
 
MainContainer: 
{

flex: 1,
paddingBottom: 200,
 
// Set content's vertical alignment.
justifyContent: 'center',
 
// Set content's horizontal alignment.

 
// Set hex color code here.
backgroundColor: '#07174C'
}
 
});
 
AppRegistry.registerComponent('Myproject', () => Myproject);