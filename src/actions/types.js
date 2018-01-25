
//Exports action commands
//They have all been saved as const so that any misspellings are 
//caught by linter

//Auth actions
export const EMAIL_CHANGED = 'email_changed';
export const PASSWORD_CHANGED = 'password_changed';
export const LOGIN_USER_SUCCESS = 'login_user_success';
export const LOGIN_USER_FAIL = 'login_user_fail';
export const LOGIN_USER = 'login_user';
export const SIGN_OUT = 'sign_out';

//Recipe actions
export const RECIPE_UPDATE = 'recipe_update';
export const RECIPE_CREATE = 'recipe_create';
export const RECIPES_FETCH_SUCCESS = 'recipes_fetch_success';
export const RECIPE_SAVE_SUCCESS = 'recipe_save_success';
export const RECIPE_UPDATE_SUCCESS = 'recipe_update_success;'
export const CLEAR_FORM = 'clear_recipe_form';
export const RECIPE_SEARCH = 'search_recipes';
export const SEARCH_UPDATE = 'search_update';
