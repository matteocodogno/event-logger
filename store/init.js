import { createStore, applyMiddleware, compose } from 'redux';
import thunkMiddleware from 'redux-thunk';
import storage from 'redux-persist/lib/storage'; // defaults to localStorage for web and AsyncStorage for react-native
import hardSet from 'redux-persist/lib/stateReconciler/hardSet';
import { persistStore, persistReducer } from 'redux-persist';

import { initialState, rootReducer } from './root';

const enhancers = [];
const middlewares = [thunkMiddleware];

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
  ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
  : compose;

const persistConfig = {
  key: 'root',
  storage,
  stateReconciler: hardSet,
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

/**
 * Configure the redux store wit enhancers and middlewares
 * @param {*} state an optional initial state
 */
export const configureStore = (state = initialState) => {
  const enhancer = composeEnhancers(
    applyMiddleware(...middlewares),
    ...enhancers
  );

  const store = createStore(persistedReducer, state, enhancer);
  const persistor = persistStore(store);

  return { store, persistor };
};
