import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';
import userReducer from './user/reducer';

export default function createReducer(injectedReducers = {}) {
  const rootReducer = combineReducers({
    routing: routerReducer,
    user: userReducer,
    ...injectedReducers,
  });
  return rootReducer;
}
