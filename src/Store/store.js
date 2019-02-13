import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';

import RootReducer from '../Reducers/RootReducer';

import { routerMiddleware } from 'connected-react-router';
import { createBrowserHistory } from 'history';

//import { LoggerMiddleware } from '../Middleware/LoggerMiddleware';

export const history = createBrowserHistory();

const store = createStore(
    RootReducer(history),
    applyMiddleware(
    	routerMiddleware(history),
    	thunk,
    	//LoggerMiddleware
    ),
)

export default store
