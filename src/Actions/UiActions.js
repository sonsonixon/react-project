import {
	// api fetch loader
	SHOW_FETCH_LOADER,
	HIDE_FETCH_LOADER,

	// api post loader
 	SHOW_POST_LOADER,
    HIDE_POST_LOADER,

	// serverside table
	BUILD_TABLE,
	SAVE_TABLE,
		
} from '../ActionCreator';
// fetch
export const showFetchLoader = () => (dispatch) => Promise.resolve().then(() => {
	return dispatch({
		type: SHOW_FETCH_LOADER
	})
})

export const hideFetchLoader = () => ({
	type: HIDE_FETCH_LOADER
})

// post
export const showPostLoader = () => (dispatch) => Promise.resolve().then(() => {
	return dispatch({
		type: SHOW_POST_LOADER
	})
})

export const hidePostLoader = () => ({
	type: HIDE_POST_LOADER
})

// build serverside table
export const updateTable = (data) => (dispatch) => Promise.resolve().then(() => {
	return dispatch({
		type: BUILD_TABLE,
		payload: { data }
	})
})

export const saveTable = (api, pageSize, page) => (dispatch) => Promise.resolve().then(() => {
	return dispatch({
		type: SAVE_TABLE,
		payload: { api, pageSize, page }
	})
})