import React from 'react';
import { Text, View, ScrollView } from 'react-native';
import TextList from './TextList';

{/* <Recipe title="[title]" serving='[serving]' prep="[time in minutes]" cook="[time in minutes]" ingredients="[string of text split by splitChar]" splitChar='[define the split character]' instructions="[string of text split by splitChar]"/> */}

const Recipe = props => {
  return (
    <View style={{
      flex: 1,
      flexDirection: 'column',
      // backgroundColor: 'blue',
      paddingTop: 24
    }}>
      <ScrollView>
        <View style={{
          flex: 1,
          flexDirection: 'column',
          height: 300,
          // backgroundColor: 'red'
        }}>
          <View style={{
            alignItems: 'center',
            flexDirection: 'row',
            flex: 2,
            justifyContent: 'center',
            // backgroundColor: 'pink'
          }}>
            <Text style={{ fontSize: 50 }}>{props.title}</Text>
          </View>
          <View style={{
            alignItems: 'center',
            flexDirection: 'row',
            flex: 1,
            justifyContent: 'center',
            // backgroundColor: 'purple'
          }}>
            <View style={{ alignItems: 'center', justifyContent: 'center', flex: 1 }}>
              <Text style={{ fontSize: 20 }}>Serving Size</Text>
              <Text style={{ fontSize: 25 }}>{props.serving} people</Text>
            </View>
            <View style={{ alignItems: 'center', justifyContent: 'center', flex: 1 }}>
              <Text style={{ fontSize: 20 }}>Prep time</Text>
              <Text style={{ fontSize: 25 }}>{props.prep} min</Text>
            </View>
            <View style={{ alignItems: 'center', justifyContent: 'center', flex: 1 }}>
              <Text style={{ fontSize: 20 }}>Cook Time</Text>
              <Text style={{ fontSize: 25 }}>{props.cook} min</Text>
            </View>
          </View>
        </View>
        <View style={{
          flexDirection: 'column',
          flex: 1,
          alignItems: 'center',
          // backgroundColor: 'orange'
        }}>
          <View style={{
            flex: 1,
            flexDirection: 'row',
            justifyContent: 'center',
            alignItems: 'center'
          }}>
            <Text style={{ fontSize: 30 }}>Ingredients</Text>
          </View>
          <TextList listItems={props.ingredients} size="20" splitChar={props.splitChar} multiCol="true"/>
        </View>
        <View style={{
          flex: 1,
          flexDirection: 'column',
          justifyContent: 'flex-start',
          paddingLeft: 10,
          paddingRight: 10
        }}>
          <View style={{
            flexDirection: 'row',
            flex: 1,
            justifyContent: 'center'
          }}>
            <Text style={{ fontSize: 30 }}>Instructions</Text>
          </View>
          <TextList listItems={props.instructions} size="20" splitChar={props.splitChar} multiCol="false"/>
        </View>
      </ScrollView>
    </View>
  );
}

export default Recipe;
