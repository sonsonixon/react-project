import { combineReducers } from 'redux';

//Reducers
import CounterReducer from './CounterReducer';
import UserReducer from './UserReducer';
import TodosReducer from './TodosReducer';
import UiReducer from './UiReducer';

// Redux Form Reducer
import { reducer as formReducer } from 'redux-form';

export default combineReducers({
	form: 	 formReducer,
	ui: 	 UiReducer,
	counter: CounterReducer,
  	users: 	 UserReducer,
  	todos: 	 TodosReducer
});