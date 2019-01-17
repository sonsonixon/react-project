import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';

import RootReducer from '../Reducers/RootReducer';

// Custom Middleware
/*
const loggerMiddleware = store => next => action => {
	console.log('This is a custom logger middleware.');
	console.log('Action Dispatched: ' + action.type);
	console.log(' ');
	next(action);
}
*/

const store = createStore(
    RootReducer,
    applyMiddleware(thunk)
);

export default store;
