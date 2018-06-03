import React, { Component } from 'react';
import {  Router } from 'react-router-dom';
import logo from './logo.svg';
import './App.css';
import './sass/main.scss';
import createBrowserHistory from 'history/createBrowserHistory';
import routes from './routes.js';
import { Provider } from 'react-redux';
import configureStore from './store/configureStore';
import {AUTH_USER} from './store/actions/actionTypes'




const store = configureStore();

window.jQuery = window.$ = require('jquery/dist/jquery.min');

const history = createBrowserHistory()
//const history = syncHistoryWithStore(browserHistory, store)


const token = localStorage.getItem('token');
const userId = localStorage.getItem('userId');

if (token) {
  
  store.dispatch({type:AUTH_USER, payload: userId});
}


class App extends Component {
  render() {
    return (
      <Provider store={store}>
    
        <Router history={history}>
            {routes}
        </Router>
   
      </Provider>
    );
  }
}

export default App;
