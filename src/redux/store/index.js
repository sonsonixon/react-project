import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';

import rootReducer from '../reducers/rootReducer';

import { routerMiddleware } from 'connected-react-router';
import { createBrowserHistory } from 'history';

import { loadState, saveState } from '../middleware/localStorage';

import throttle from 'lodash/throttle';

//import { LoggerMiddleware } from '../Middleware/LoggerMiddleware';

export const history = createBrowserHistory();

const persistedState = loadState();

const store = createStore(
    rootReducer(history),
    persistedState,
    applyMiddleware(
    	routerMiddleware(history),
    	thunk,
    	//LoggerMiddleware
    ),
)

store.subscribe(throttle(() => {
	saveState({
		login: store.getState().login
	});
}), 1000);

console.log(persistedState);

export default store
