import { combineReducers } from 'redux';

//Reducers
import CounterReducer from './CounterReducer';
import UserReducer from './Users/UserReducer';


export default combineReducers({
	counter: CounterReducer,
  	users: UserReducer
});