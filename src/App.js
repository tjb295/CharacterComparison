import React, { Component } from 'react';
import {Text} from 'react-native';
import { Provider } from 'react-redux';
import Router from './Router';
import ReduxThunk from 'redux-thunk';
import { createStore, applyMiddleware } from 'redux';
import reducers from './reducers';
import firebase from 'firebase';
import config from '../FirebaseConfig/initConfig';
import { SearchDictionary } from './components/SearchDictionary';

class App extends Component {

  componentWillMount(){
    
    firebase.initializeApp(config);
  }
  
  render(){
    return(
      <Provider store={createStore(reducers, {}, applyMiddleware(ReduxThunk))}>
      <Router />
    </Provider>
    );
  }
}

export default App;