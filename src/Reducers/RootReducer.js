import { combineReducers } from 'redux';

//Reducers
import CounterReducer from './CounterReducer';
import UserReducer from './UserReducer';
import TodoReducer from './TodoReducer';
import UiReducer from './UiReducer';

export default combineReducers({
	ui: UiReducer,
	counter: CounterReducer,
  	users: UserReducer,
  	todo: TodoReducer
});