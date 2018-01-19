//Import dependencies
import { combineReducers } from 'redux'; // 3.7.2
import AuthReducer from './AuthReducer';
import RecipeFormReducer from './RecipeFormReducer';
import RecipeReducer from './RecipeReducer';

//Combine and export all reducers as one object
export default combineReducers({
	auth: AuthReducer,
	recipeForm: RecipeFormReducer,
	recipes: RecipeReducer
});
