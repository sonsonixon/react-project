import { combineReducers } from 'redux';

//Reducers
import counter from './counter';
import users   from './users';
import todos   from './todos';
import ui 	   from './ui';
import login   from './login';

// connected react router
import { connectRouter } from 'connected-react-router';

// Redux Form Reducer
import { reducer as form } from 'redux-form';

export default (history) => combineReducers({
	router:  connectRouter(history),
	counter: counter,
	form: 	 form,
	login: 	 login,
	users: 	 users,
	todos: 	 todos,
	ui: 	 ui,  	
});