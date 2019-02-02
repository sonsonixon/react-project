import {
	showFetchLoader
} from '../Actions/UiActions';

import {
	fetchRequest
} from './ApiMiddleware';

import {
	handleTodosClassErrors
} from './TodosMiddleware';

// reset form
import {reset} from 'redux-form';

import swal from 'sweetalert2'

export function handleSuccess(data, form) {
	return function(dispatch, getState) {
		swal({
		  	title: data.title,
		  	text: data.message,
		  	type: 'success',
		  	confirmButtonColor: '#3085d6',
		  	confirmButtonText: 'Yes, Got it!'
		}).then((result) => {
			const { ui } = getState();

			let url = ui.url;
			let pageSize = ui.pageSize;
			let page = ui.page;

			dispatch(createTable(url, pageSize, page));
		  	dispatch(reset(form));
		})
	}
}

export function handleValidationErrors(errors) {
	return function(dispatch) {
		let mod = errors.module;
		let keys = Object.keys(errors.errors);
		switch(mod) {
			case 'todos':
				dispatch(handleTodosClassErrors(keys));
				break;
			default:
				// do nothing
		}
	}
}

export function showErrorMessages(messages) {
	return function(dispatch) {
		console.log(messages);
	}
}

/*
export function refreshTable(url, pageSize, page) {
	return function(dispatch) {
		return dispatch(
			showFetchLoader()
		)
		.then(() => {
			dispatch(fetchRequest(url, pageSize, page))
		})
	}
}
*/

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
		