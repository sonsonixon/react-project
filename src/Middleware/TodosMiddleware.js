import {
	postRequest
} from './ApiMiddleware';

import {
	showPostLoader
} from '../Actions/UiActions';

export function addTodo(url, data) {
	return function(dispatch) {
		return dispatch(
			showPostLoader() // show post loader
		).then(() => {
			// set timeout to 2 seconds to simulate server latency
			setTimeout(() => {
				dispatch(postRequest(url, data)) // post data to api
			}, 2000);
		})
	}
}