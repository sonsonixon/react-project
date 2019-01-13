import { combineReducers } from 'redux';

//Reducers
import CounterReducer from './CounterReducer';
import UserReducer from './UserReducer';


export default combineReducers({
	CounterReducer,
  	UserReducer
});