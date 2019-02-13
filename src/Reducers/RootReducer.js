import { combineReducers } from 'redux';

//Reducers
import CounterReducer from './CounterReducer';
import UserReducer from './UserReducer';
import TodosReducer from './TodosReducer';
import UiReducer from './UiReducer';
import LoginReducer from './LoginReducer';

// connected react router
import { connectRouter } from 'connected-react-router';

// Redux Form Reducer
import { reducer as FormReducer } from 'redux-form';

export default (history) => combineReducers({
	router:  connectRouter(history),
	counter: CounterReducer,
	form: 	 FormReducer,
	login: 	 LoginReducer,
	users: 	 UserReducer,
	todos: 	 TodosReducer,
	ui: 	 UiReducer,  	
});