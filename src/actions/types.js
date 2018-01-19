
//Exports action commands
//They have all been saved as const so that any misspellings are 
//caught by linter

//Auth actions
export const EMAIL_CHANGED = 'email_changed';
export const PASSWORD_CHANGED = 'password_changed';
export const LOGIN_USER_SUCCESS = 'login_user_success';
export const LOGIN_USER_FAIL = 'login_user_fail';
export const LOGIN_USER = 'login_user';

//Recipe actions
export const RECIPE_UPDATE = 'recipe_update';
export const RECIPE_CREATE = 'recipe_create';
export const RECIPES_FETCH_SUCCESS = 'recipes_fetch_success';
export const RECIPE_SAVE_SUCCESS = 'recipe_save_success';
