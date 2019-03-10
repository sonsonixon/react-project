import apiCreator from '../../Services/apiCreator';
 
const api = apiCreator.create();

export function fetchTableData(url, pageSize, page) {
	return function(dispatch) {
		return Promise.resolve().then(() => {
			return api[url](pageSize, page)
		})
	}
}


/*export function apiRequestTableDataFETCH(url, pageSize, page) {
	return function(dispatch) {
		return Promise.resolve().then(() => {
			dispatch(showFetchLoader());
			return api[url](pageSize, page)
			.then((res) => {
				dispatch(createTable(res.data))
			})
			.then(() => {
				dispatch(hideFetchLoader());
			})
		})
	}
}*/

/*// post request
export function apiRequestPOST(url, uuid, data) {
	return function(dispatch) {
		return Promise.resolve().then(() => {
			api[url](uuid, data)
			.then((res) => {
				// handle request response in the UI middleware
				dispatch(handlePostResponse(res.data));
			})
		})
	}
}

// fetch request
export function apiRequestFETCH(url, data) {
	return function(dispatch) {
		return Promise.resolve().then(() => {
			api[url](data)
			.then((res) => {
				dispatch(handleFetchResponse(res.data));
			})
		})
	}
}*/

// Handle HTTP errors
export function handleErrors(response) {
  	if (!response.ok) {
    	throw Error(response.statusText);
  	}
  	return response;
}

