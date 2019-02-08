import { combineReducers } from 'redux';

//Reducers
import CounterReducer from './CounterReducer';
import UserReducer from './UserReducer';
import TodosReducer from './TodosReducer';
import UiReducer from './UiReducer';
import LoginReducer from './LoginReducer';

// Redux Form Reducer
import { reducer as FormReducer } from 'redux-form';

export default combineReducers({
	counter: CounterReducer,
	form: 	 FormReducer,
	login: 	 LoginReducer,
	users: 	 UserReducer,
	todos: 	 TodosReducer,
	ui: 	 UiReducer,  	
});