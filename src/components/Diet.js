import React from 'react';
import TextList from "./TextList";

const Diet = props => {
  console.log(props);
  let renderArr = [];
  if (props.vegan === true) { renderArr.push("Vegan"); }
  if (props.vegetarian === true) { renderArr.push("Vegetarian"); }
  if (props.dairyFree === true) { renderArr.push("Dairy Free"); }
  if (props.glutenFree === true) { renderArr.push("Gluten Free"); }
  let str = renderArr.join('\n');
  return <TextList listItems={str} splitChar="3" multiCol="true" size="20" color="white" align="center" />
}

export default Diet;