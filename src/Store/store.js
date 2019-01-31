import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';

import RootReducer from '../Reducers/RootReducer';

//import { LoggerMiddleware } from '../Middleware/LoggerMiddleware';

const store = createStore(
    RootReducer,
    applyMiddleware(
    	thunk,
    	//LoggerMiddleware
    )
);

export default store;
