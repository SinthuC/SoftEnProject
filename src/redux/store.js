import {
  createStore,
  combineReducers,
  applyMiddleware,
} from 'redux';

import logger from 'redux-logger';
import thunk from 'redux-thunk';
import promise from 'redux-promise-middleware';

import AuthReducer from './reducer/auth';

const reducers = combineReducers({
  auth: AuthReducer,
});

const middleware = applyMiddleware(promise(), thunk, logger);

const store = createStore(reducers, middleware);

export default store;