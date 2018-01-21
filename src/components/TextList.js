import React from 'react';
import { StyleSheet, Text, View, Button, ScrollView } from 'react-native';

const TextList = props => {
  let arr = props.listItems.split('\n');
  console.log(arr);
  const styleObj = {
    flex: 1,
    flexDirection: 'column'
  };

  const fillCol = (array, num) => {
    const number = (bool, i)=> {
      if (bool) {
        return (i + 1) + ". "
      };
    };
    array = array.map((element, i) => {
      return (
        <Text key={i} style={{ fontSize: parseInt(props.size) }}>{number(num, i)}{element.trim()}</Text>
      );
    });
    return array;
  };

  switch (props.multiCol) {
    case "true":
      let col1 = [];
      let col2 = [];
      arr.map((element, i) => {
        if (i % 2 === 0) {
          col1.push(element);
        } else {
          col2.push(element);
        };
      });
      return (
        <View style={{ flex: 1, flexDirection: 'row', paddingLeft: 10, paddingRight: 10 }}>
          <View style={styleObj}>
            {fillCol(col1)}
          </View>
          <View style={styleObj}>
            {fillCol(col2)}
          </View>
        </View>
      );
      break;
    case "false":
      return (
        <View style={styleObj}>
          {fillCol(arr, true)}
        </View>
      );
      break;
  };
};

export default TextList;
