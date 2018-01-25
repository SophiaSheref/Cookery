//Import action types
import {
	RECIPES_FETCH_SUCCESS,
	RECIPE_SEARCH,
	SEARCH_UPDATE
} from '../actions/types';

//Declare initial state
const INITIAL_STATE = {
  results: {},
   search: {},
  query: ''
};

//Export reducer
export default (state = INITIAL_STATE, action) => {
	switch (action.type) {
		//If fetching recipes succeeds:
		case RECIPES_FETCH_SUCCESS:
			//Return recipes object
			return { ...state, results: action.payload };
		case RECIPE_SEARCH:
		  return { ...state, search: action.payload };
		case SEARCH_UPDATE:
		  return { ...state, query: action.payload };
		//Otherwise return nothing
		default:
			return state;
	}
};
