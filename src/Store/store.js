import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';

import RootReducer from '../Reducers/RootReducer';

// Custom Middleware
const loggerMiddleware = store => next => action => {
	console.log('This is a custom logger middleware.');
	console.log('This indicates that an action has been dispatched.');
	next(action);
}

const store = createStore(
    RootReducer,
    applyMiddleware(thunk, loggerMiddleware)
);

export default store;
