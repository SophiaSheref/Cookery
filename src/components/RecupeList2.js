import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';


export default class LotsOfStyles extends Component {
  render() {
    return (
      <View>
       
        <Text style={styles.bigred}>Recipe Name:</Text>
        <Text style={styles.biggreen}>Prep time:</Text>
        <Text style={styles.biggreen}>Cook time:</Text>
        <Text style={[styles.biggreen]}>Serving:</Text>
         

      </View>

    );
  }
}

const styles = StyleSheet.create({
    bigred: {
    color: 'black',
    fontSize: 25,
    fontWeight: 'bold',
    height: 60,
    paddingTop:20
  
    },
    biggreen: {
    color: 'black',
    fontSize: 20,
    height: 60,
    paddingTop:10
    },

 
});
