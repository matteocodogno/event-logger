import { createStore, applyMiddleware, compose } from 'redux';
import thunkMiddleware from 'redux-thunk';

import { initialState, rootReducer } from './root';

const enhancers = [];
const middlewares = [thunkMiddleware];

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
  ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
  : compose;

/**
 * Configure the redux store wit enhancers and middlewares
 * @param {*} state an optional initial state
 */
export const configureStore = (state = initialState) => {
  const enhancer = composeEnhancers(
    applyMiddleware(...middlewares),
    ...enhancers
  );

  return createStore(rootReducer, state, enhancer);
};
