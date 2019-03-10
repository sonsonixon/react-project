import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';

// connected react router
import { routerMiddleware } from 'connected-react-router';
import { createBrowserHistory } from 'history';

// lodash
import throttle from 'lodash/throttle';

// reducer
import rootReducer from '../Reducers/RootReducer';

// middleware
import { Logger } from '../Middlewares/LoggerMiddleware';

import { loadState, saveState } from './localStorage';

// local storage
export const history = createBrowserHistory();

const persistedState = loadState();

const store = createStore(
    rootReducer(history),
    persistedState,
    applyMiddleware(
    	routerMiddleware(history),
    	thunk,
    	Logger
    ),
)

store.subscribe(throttle(() => {
	saveState({
		user: store.getState().user,
	});
}), 1000);

// console.log(persistedState);

export default store
