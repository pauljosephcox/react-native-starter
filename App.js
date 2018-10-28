import React from 'react';
import { Provider } from 'react-redux';
import { createStore, compose, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import {createLogger } from 'redux-logger';
import Theme from './Themes/Default';

// Reducers
import rootReducer from './Reducers';

// Components
import AppSwitchNavigator from  './Components/AppSwitchNavigator';

// Create Store
const store = createStore(rootReducer,
  compose(
    applyMiddleware(
      thunk,
      createLogger()
    )
  )
)

// Render App
export default class App extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <AppSwitchNavigator />
      </Provider>
    );
  }
}
