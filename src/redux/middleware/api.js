import {
	apiRequest,
	requestSuccess,
	requestFailed
} from '../actions/api';

import {
	buildTable,
	showFetchLoader,
	hideFetchLoader,
} from '../actions/ui';

import {
	handleResponse,
} from './ui';

import apiCreator from '../../services/api';
 
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
					//console.log(res.data);
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

