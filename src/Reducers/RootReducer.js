import { combineReducers } from 'redux';

//Reducers
import CounterReducer from './CounterReducer';
import UserReducer from './UserReducer';
import TodosReducer from './TodosReducer';
import UiReducer from './UiReducer';

export default combineReducers({
	ui: 	 UiReducer,
	counter: CounterReducer,
  	users: 	 UserReducer,
  	todos: 	 TodosReducer
});