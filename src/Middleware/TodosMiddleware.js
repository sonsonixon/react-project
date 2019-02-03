import {
	postRequest
} from './ApiMiddleware';

import {
	showPostLoader
} from '../Actions/UiActions';

import {
	clearErrors,
	hasErrorUserId,
	hasErrorTitle,
} from '../Actions/TodosActions';

export function handleTodosClassErrors(keys) {
	return function (dispatch) {
		return dispatch(
			clearErrors() // clear class states
		)
		.then(() => {
			keys.forEach(key => {
				switch(key) {
					case 'userid':
						dispatch(hasErrorUserId());
						break;
					case 'title':
						dispatch(hasErrorTitle());
						break;
					default:
						// do nothing
				}
			})
		})		
	}
}

export function addTodo(url, data, form) {
	return function(dispatch) {
		return dispatch(
			showPostLoader() // show post loader
		).then(() => {
			// set timeout to 2 seconds to simulate server latency
			setTimeout(() => {
				dispatch(postRequest(url, data, form)) // post data to api
			}, 2000);
		})
	}
}