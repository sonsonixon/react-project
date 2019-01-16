import { combineReducers } from 'redux';

//Reducers
import CounterReducer from './CounterReducer';
import UserReducer from './UserReducer';
import TodoReducer from './TodoReducer';

export default combineReducers({
	counter: CounterReducer,
  	users: UserReducer,
  	todo: TodoReducer
});