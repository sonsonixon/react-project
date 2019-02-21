import {
	postRequest
} from './api';

import {
	showPostLoader,
} from '../actions/ui';

import {
	clearClassTodos,
	// userid
	hasErrorUserid,
	setErrorUserid,
	// title
	hasErrorTitle,
	setErrorTitle,
} from '../actions/todos';

export function handleErrorsTodos(data) {
	return function (dispatch) {
		return dispatch(
			clearClassTodos() // clear class states
		)
		.then(() => {
			Object.keys(data).forEach(key => {
				const message = data[key];
				switch(key) {
					case 'userid':
						dispatch(hasErrorUserid());
						dispatch(setErrorUserid(message));
						break;
					case 'title':
						dispatch(hasErrorTitle());
						dispatch(setErrorTitle(message));
						break;
					default:
						// do nothing
				}
			})
		})		
	}
}

export function addTodo(url, data) {
	return function(dispatch) {
		return dispatch(
			showPostLoader() // show post loader
		).then(() => {
			// set timeout to 2 seconds to simulate server latency
			setTimeout(() => {
				dispatch(postRequest(url, data));
			}, 2000);
		})
		.then(() => {
			dispatch(clearClassTodos());
		})
	}
}