//Import dependencies
import React from 'react';
import { Scene, Router, Actions } from 'react-native-router-flux'; // 4.0.0-beta.28
import LoginForm from './components/LoginForm';
import RecipeList from './components/RecipeList';
import RecipeCreate from './components/RecipeCreate';
import RecipeEdit from './components/RecipeEdit';

//Create router component
const RouterComponent = () => {
	return (
		<Router>
			{/* Root scene contains all 'pages' for the whole app */}
			<Scene key='root' hideNavBar>
				{/* Auth scene groups 'pages' in the Auth flow */}
				<Scene key='auth'>
					{/* Login scene displays the LoginForm component */}
					<Scene key='login' component={LoginForm} title='Please Login' initial />
				</Scene>
				{/* Main scene groups 'pages' in the main flow of app */}
				<Scene key='main'>
					{/* Recipes scene is initial in main flow, has a right-header action */}
					<Scene
						rightTitle='Add'
						onRight={() => Actions.recipeCreate()}
						key='recipeList'
						component={RecipeList}
						title='Recipes'
						initial
					/>
					{/* Create/Edit recipes - different versions of recipe form */}
					<Scene key='recipeCreate' component={RecipeCreate} title='Create Recipe' />
					<Scene key='recipeEdit' component={RecipeEdit} title='Edit Recipe' />
				</Scene>
			</Scene>
		</Router>
	);
};

//Export component
export default RouterComponent;
