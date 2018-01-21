//Imports dependencies
import React, { Component } from 'react';
import { Provider } from 'react-redux'; // 5.0.6
import { createStore, applyMiddleware } from 'redux'; // 3.7.2
import firebase from 'firebase'; // 4.8.2
import Thunk from 'redux-thunk'; // 2.2.0
import reducers from './src/reducers';
import Router from './src/Router';
import { AppLoading, Font } from 'expo';

//Creates App component
class App extends Component {
  state = { isReady: false,}
  //Establishes link to Firebase when App loads
  componentWillMount() {
    (async() => {

    await Font.loadAsync({
    
    'Lobster': require('./assets/fonts/Lobster/Lobster-Regular.ttf'),
    
    'OpenSans': require('./assets/fonts/Open_Sans/OpenSans-Regular.ttf'),
    
     'OpenSans_Bold': require('./assets/fonts/Open_Sans/OpenSans-Bold.ttf')
    
    
    });
    
    this.setState({ isReady: true});
    
    })();
    const config = {
      apiKey: 'AIzaSyCOPN9S8T35Nsf2V7cGRnMjIjtNh3EylpI',
      authDomain: 'cookery-865ff.firebaseapp.com',
      databaseURL: 'https://cookery-865ff.firebaseio.com',
      projectId: 'cookery-865ff',
      storageBucket: 'cookery-865ff.appspot.com',
      messagingSenderId: '197786513690'
    };

    //firebase.initializeApp(config);
    !firebase.apps.length ? firebase.initializeApp(config) : firebase.app();
  }

  //What is rendered to the screen:
  render() {
    if (!this.state.isReady) {
      return <AppLoading />;
    }
    return (
      //Provider, the go-between for React and Redux, creates store,
      //imports reducers, and applies Redux-Thunk for using promises
      <Provider 
        store={createStore(reducers, { }, applyMiddleware(Thunk))}
      >
        {/* Router component determines which 'page' of app is shown */}
        <Router />
      </Provider>
    );
  }
}

//Exports App
export default App;

