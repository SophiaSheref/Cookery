//Import action types
import {
	RECIPES_FETCH_SUCCESS
} from '../actions/types';

//Declare initial state
const INITIAL_STATE = {};

//Export reducer
export default (state = INITIAL_STATE, action) => {
	switch (action.type) {
		//If fetching recipes succeeds:
		case RECIPES_FETCH_SUCCESS:
			//Return recipes object
			return action.payload;
		//Otherwise return nothing
		default:
			return state;
	}
};
