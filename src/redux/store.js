import {
  createStore,
  combineReducers,
  applyMiddleware,
} from 'redux';

import logger from 'redux-logger';
import thunk from 'redux-thunk';
import promise from 'redux-promise-middleware';

import SignInReducer from './reducer/signin';
import SignUpReducer from './reducer/signup';
import NewsReducer from './reducer/news';
import AuthReducer from './reducer/auth';
import ForgetPasswordReducer from './reducer/forgetPassword'

const reducers = combineReducers({
  auth: AuthReducer,
  signin: SignInReducer,
  signup: SignUpReducer,
  news: NewsReducer,
  forgetPassword: ForgetPasswordReducer,
});

const middleware = applyMiddleware(promise(), thunk, logger);

const store = createStore(reducers, middleware);

export default store;