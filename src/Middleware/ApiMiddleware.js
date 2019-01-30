import {
	updateTable
} from '../Actions/UiActions';

import {
	apiRequest,
	requestSuccess,
	requestFailed
} from '../Actions/ApiActions';

import {
	hideFetchLoader
} from '../Actions/UiActions';

import apiCreator from '../Services/Api';
 
const api = apiCreator.create();

// POST
export function postRequest(url, data) {
	return function(dispatch) {
		console.log('Dispatch Action');
	}
}

// FETCH
export function fetchRequest(url, pageSize, page) {
	return function(dispatch) {
		dispatch(apiRequest()).then(() => {
			api[url](pageSize, page)
			.then((res) => { 
				dispatch(requestSuccess());
				console.log('%c rows: ', 'color: red',  res.data.rows);
				console.log('%c pages: ', 'color: green', res.data.pages);
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

// Handle HTTP errors
export function handleErrors(response) {
  	if (!response.ok) {
    	throw Error(response.statusText);
  	}
  	return response;
}