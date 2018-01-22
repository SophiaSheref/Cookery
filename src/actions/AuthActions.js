//Import dependencies
import firebase from 'firebase'; // 4.8.2
import { Actions } from 'react-native-router-flux'; // 4.0.0-beta.28
import { 
	EMAIL_CHANGED, 
	PASSWORD_CHANGED,
	LOGIN_USER_SUCCESS,
	LOGIN_USER_FAIL,
	LOGIN_USER,
	SIGN_OUT
} from './types';

//emailChanged action sends email text to reducers
export const emailChanged = (text) => {
	return {
		type: EMAIL_CHANGED,
		payload: text
	};
};

//passwordChanged action sends password text to reducers
export const passwordChanged = (text) => {
	return {
		type: PASSWORD_CHANGED,
		payload: text
	};
};

//loginUser action uses Redux-Thunk to let promises fulfill before running
export const loginUser = ({ email, password }) => {
	return (dispatch) => {
		//Sends LOGIN_USER to reducers which triggers spinner, clears errors (if any)
		dispatch({ type: LOGIN_USER });
		//Attempts to sign in user with email and password
		firebase.auth().signInWithEmailAndPassword(email, password)
		//If successful, call loginUserSuccess function
		.then(user => loginUserSuccess(dispatch, user))
		//If not successful:
		.catch(() => {
			//Attempts to create user with email and password
			firebase.auth().createUserWithEmailAndPassword(email, password)
			//If that succeeds, run loginUserSuccess function
			.then(user => loginUserSuccess(dispatch, user))
			//Otherwise, run loginUserFail function
			.catch(() => loginUserFail(dispatch));
		});
	};
};

//Helper function when login succeeds
const loginUserSuccess = (dispatch, user) => {
	//Dispatches LOGIN_USER_SUCCESS to reducers, clears form inputs, but saves user to state
	dispatch({
		type: LOGIN_USER_SUCCESS,
		payload: user
	});
	//Triggers router to redirect to 'main' flow of app
	Actions.main();
};

//Helper function when login fails
const loginUserFail = (dispatch) => {
	//Dispatches LOGIN_USER_FAIL to reducers, which displays error message
	dispatch({ type: LOGIN_USER_FAIL });
};

export const logOut = () => {
  return (dispatch) =>{
  firebase.auth().signOut().then(() => {
    Actions.login();
    dispatch({ type: SIGN_OUT });
  })
  .catch( err => console.log(err.message));
  };
};