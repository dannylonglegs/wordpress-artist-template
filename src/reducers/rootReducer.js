import { combineReducers } from 'redux';
import simpleReducer from './simpleReducer';
import postsReducer from './postsReducer'

export default combineReducers({
 simpleReducer,
 postsReducer
});