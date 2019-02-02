import {
	updateTable
} from '../Actions/UiActions';

import {
	apiRequest,
	requestSuccess,
	requestFailed
} from '../Actions/ApiActions';

import {
	hideFetchLoader,
	hidePostLoader,
} from '../Actions/UiActions';

import {
	handleSuccess,
	handleValidationErrors
} from './UiMiddleware';

import apiCreator from '../Services/Api';
 
const api = apiCreator.create();

// POST
export function postRequest(url, data, form) {
	return function(dispatch) {
		dispatch(apiRequest()).then(() => {
			api[url](data)
			.then((res) => {
				switch(res.data.code) {
					case 'success':
						dispatch(handleSuccess(res.data, form));
						break;
					case 'error':
						dispatch(handleValidationErrors(res.data));
						break;
					default:
						// do nothing
				}
				dispatch(hidePostLoader());
			})
		})
	}
}

// FETCH
export function fetchRequest(url, pageSize, page) {
	return function(dispatch) {
		dispatch(apiRequest()).then(() => {
			api[url](pageSize, page)
			.then((res) => { 
				dispatch(requestSuccess());
				//console.log('%c rows: ', 'color: red',  res.data.rows);
				//console.log('%c pages: ', 'color: green', res.data.pages);
				dispatch(updateTable(res.data)).then(() => {
					dispatch(hideFetchLoader())
				})
			})
			.catch((error) => { 
				dispatch(requestFailed());
				console.log(error);
			})
		})
	}
}

/*
// Handle HTTP errors
export function handleErrors(response) {
  	if (!response.ok) {
    	throw Error(response.statusText);
  	}
  	return response;
}*/

