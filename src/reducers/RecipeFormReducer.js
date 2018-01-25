//Import dependencies
import {
	RECIPE_UPDATE,
	RECIPE_CREATE,
	RECIPE_SAVE_SUCCESS,
	CLEAR_FORM,
	RECIPE_UPDATE_SUCCESS
} from '../actions/types';

//Declare initial state (mostly used to reset forms)
const INITIAL_STATE = {
	vegan: false,
    vegetarian: false,
    glutenfree: false,
    dairyfree: false,
    name: '',
    ingredients: '',
    steps: '',
    notes: '',
    servings: '',
    prep: '',
    cook: '',
    cals: '',
    carbs: '',
    protein: '',
    fat: ''
};

//Export reducer - expects an action and when it receives one will
//match and return the modified state
export default (state = INITIAL_STATE, action) => {
	switch (action.type) {
		//When a recipe is updated:
		case RECIPE_UPDATE:
			//State is returned with the modified properties changed
			return { ...state, [action.payload.prop]: action.payload.value };
		//When a recipe is created:
		case RECIPE_CREATE:
			//Initial state is returned, clearing form inputs
			return INITIAL_STATE;
		//When a recipe is saved:
		case RECIPE_SAVE_SUCCESS:
			//Initial state is returned, clearing form inputs
			return INITIAL_STATE;
		case RECIPE_UPDATE_SUCCESS:
		  return state;
		case CLEAR_FORM:
		  return INITIAL_STATE;
		//Anything else returns state, nothing is changed
		default:
			return state;
	}
};