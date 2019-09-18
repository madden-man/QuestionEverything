import React from 'react';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import rootReducer from './rootReducer';

export const createReduxStore = () =>
  createStore(rootReducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

export default ({ element }) => (
  <Provider store={createReduxStore()}>{element}</Provider>
);