import {
	showFetchLoader
} from '../Actions/UiActions';

import {
	fetchRequest
} from './ApiMiddleware';

//import Swal from 'sweetalert2'

export function handleValidationErrors(errors) {
	return function() {
		console.log(Object.keys(errors));
		/*Object.keys(errors).map((key) => {
			return console.log(errors[key]);
		})*/
	}
}

export function createTable(url, pageSize, page) {
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
		dispatch({ type: 'DESTROY_TABLE' });
	}
}
		