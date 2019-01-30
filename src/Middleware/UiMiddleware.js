import {
	showFetchLoader,
	voidTable
} from '../Actions/UiActions';

import {
	fetchRequest
} from './ApiMiddleware';

/*
export function handleErrors(errors) {
	return function (dispatch) {
		
	}
}
*/
export function buildTable(url, pageSize, page) {
	return function(dispatch) {
		return dispatch(
			showFetchLoader()
		).then(() => {
			dispatch(fetchRequest(url, pageSize, page))
		})
	}
}

export function destroyTable() {
	return function(dispatch) {
		dispatch(voidTable());
	}
}
		