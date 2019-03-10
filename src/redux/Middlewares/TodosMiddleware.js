/*import {
	apiRequestPOST
} from './ApiMiddleware';

import {
	showPostLoader,
} from '../ActionCreators/UiActions';

import {
	// userid
	hasErrorUserid,
	setErrorUserid,
	// title
	hasErrorTitle,
	setErrorTitle,
} from '../ActionCreators/TodosActions';

export function handleErrorsTodos(data) {
	return function (dispatch) {
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
	}
}

export function addTodo(url, data) {
	return function(dispatch) {
		dispatch(showPostLoader());
		return dispatch(apiRequestPOST(url, data));
	}
}*/