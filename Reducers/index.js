import { combineReducers } from 'redux';

import Settings from './Settings';
import Blogs from './Blogs';

const appReducer = combineReducers({
  Settings,
  Blogs
});

export default function rootReducer(state, action){
  return appReducer(state,action);
}
