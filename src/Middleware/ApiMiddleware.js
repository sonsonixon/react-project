import {
	buildTable
} from '../Actions/UiActions';

import {
	apiRequest,
	requestSuccess,
	requestFailed
} from '../Actions/ApiActions';

import {
	showFetchLoader,
	hideFetchLoader,
} from '../Actions/UiActions';

import {
	handleResponse,
} from './UiMiddleware';

import apiCreator from '../Services/Api';
 
const api = apiCreator.create();

// construct serverside table
export function fetchTableData(url, pageSize, page) {
	return function(dispatch) {
		dispatch(apiRequest()).then(() => {
			dispatch(showFetchLoader());
			api[url](pageSize, page)
			.then((res) => {
				dispatch(requestSuccess())
				.then(() => {
					dispatch(buildTable(res.data))
					.then(() => {
						dispatch(hideFetchLoader());
					})					
				})
			})
			.catch((err) => {
				dispatch(requestFailed());
			})
		})
	}
}

// post request
export function postRequest(url, data) {
	return function(dispatch) {
		dispatch(apiRequest()).then(() => {
			api[url](data)
			.then((res) => {
				dispatch(requestSuccess())
				.then(() => {
					dispatch(handleResponse(res.data));
				});				
			})
			.catch((err) => {
				dispatch(requestFailed(err))
			})
		})
	}
}

// fetch request
/*
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
*/

// Handle HTTP errors
export function handleErrors(response) {
  	if (!response.ok) {
    	throw Error(response.statusText);
  	}
  	return response;
}

