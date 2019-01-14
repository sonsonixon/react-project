import { combineReducers } from 'redux';

//Reducers
import CreateUser from './CreateUser';
import FetchUsers from './FetchUsers';

export default combineReducers({
	create: CreateUser,
  	fetch: FetchUsers
});