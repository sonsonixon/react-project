import { combineReducers } from 'redux';

//Reducers
import user from './user';
import counter from './counter';
import users   from './users';
import todos   from './todos';
import ui 	   from './ui';
// connected react router
import { connectRouter } from 'connected-react-router';
// redux form
import { reducer as form } from 'redux-form';

export default (history) => combineReducers({
	router:  connectRouter(history),
	user: user,
	counter: counter,
	form: 	 form,
	users: 	 users,
	todos: 	 todos,
	ui: 	 ui,  	
});