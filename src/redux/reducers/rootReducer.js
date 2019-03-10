import { combineReducers } from 'redux';

// reducers
import user    from './UserReducer';
import counter from './CounterReducer';
import users   from './UsersReducer';
import todos   from './TodosReducer';
import ui 	   from './UiReducer';
import login   from './LoginReducer';

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
	login:   login,
});