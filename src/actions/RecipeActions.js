//Import dependencies
import { Actions } from 'react-native-router-flux'; // 4.0.0-beta.28
import firebase from 'firebase'; // 4.8.2
import _ from 'lodash'; // 4.17.4
import { 
	RECIPE_UPDATE, 
	RECIPE_CREATE, 
	RECIPES_FETCH_SUCCESS, 
	RECIPE_SAVE_SUCCESS,
	CLEAR_FORM,
	RECIPE_SEARCH,
	SEARCH_UPDATE
} from './types';

//Updates recipe entries of given prop and value
export const recipeUpdate = ({ prop, value }) => {
	return {
		type: RECIPE_UPDATE,
		payload: { prop, value }
	};
};

export const searchUpdate = (text) => {
  return {
    type: SEARCH_UPDATE,
    payload: text
  };
};

export const clearForm = () => {
  return {
    type: CLEAR_FORM
  };
};

//Adds a new recipe entry to the database
export const recipeCreate = ({ name, ingredients, steps, servings, prep, cook, notes, cals, carbs, protein, fat, vegetarian, vegan, glutenfree, dairyfree }) => {
	//Grabs current user from firebase
	const { currentUser } = firebase.auth();
	return (dispatch) => {
		//Targets user's recipes section
		firebase.database().ref(`/users/${currentUser.uid}/recipes`)
			//Pushes new recipe
			.push({ name, ingredients, steps, servings, prep, cook, notes, cals, carbs, protein, fat, vegetarian, vegan, glutenfree, dairyfree })
			.then(() => { 
				//Sends RECIPE_CREATE to reducers, clears form inputs
				dispatch({ type: RECIPE_CREATE });
				//Returns user to previous scene
				Actions.pop();
			});
	};
};

//Gets all of a user's recipes
export const recipesFetch = () => {
	//Grab current user from firebase
	const { currentUser } = firebase.auth();
	return (dispatch) => {
		//Keeps an eye on the recipes section
		firebase.database().ref(`/users/${currentUser.uid}/recipes`)
			//When any value is changed, updates new values
			.on('value', snapshot => {
				//Sends RECIPES_FETCH_SUCCESS to reducers with recipes object
				dispatch({ type: RECIPES_FETCH_SUCCESS, payload: snapshot.val() });
			});
	};
};

export const recipeSearch = (terms) => {
  const {currentUser } = firebase.auth();
  return(dispatch) => {
    firebase.database().ref(`/users/${currentUser.uid}/recipes`)
      .once('value', snapshot => {
        const recipes = _.map(snapshot.val(), (val, uid) => {
		    return { ...val, uid };
	      });
	      const results = recipes.filter(recipe => recipe.ingredients.toLowerCase().includes(terms.toLowerCase()));
        dispatch({ type: RECIPE_SEARCH, payload: { ...results } });
      });
  };
};

//Saves changes made to recipes
export const recipeSave = ({ name, ingredients, steps, servings, prep, cook, notes, cals, carbs, protein, fat, vegetarian, vegan, glutenfree, dairyfree, uid }) => {
	//Grabs current user from firebase
	const { currentUser } = firebase.auth();
	return (dispatch) => {
		//Targets specific recipe in database
		firebase.database().ref(`/users/${currentUser.uid}/recipes/${uid}`)
			//Updates fields if changed
			.set({ name, ingredients, steps, servings, prep, cook, notes, cals, carbs, protein, fat, vegetarian, vegan, glutenfree, dairyfree })
			.then(() => {
				//Then sends RECIPE_SAVE_SUCCESS to reducers, which clears inputs
				dispatch({ type: RECIPE_SAVE_SUCCESS });
				//Returns user to previous scene
				Actions.recipeList();
			});
	};
};

//Deletes specific recipe in database
export const recipeDelete = ({ uid }) => {
	//Grabs user info
	console.log(uid);
	const { currentUser } = firebase.auth();
	return () => {
		//Targets specific recipe
		firebase.database().ref(`/users/${currentUser.uid}/recipes/${uid}`)
			//Deletes it
			.remove()
			.then(() => {
				//Returns user to previous scene
				Actions.recipeList();
			});
	};
};