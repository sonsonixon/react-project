import {
	// fetch loader
	SHOW_FETCH_LOADER,
	HIDE_FETCH_LOADER,

	// post loader
 	SHOW_POST_LOADER,
    HIDE_POST_LOADER,

	// serverside table
	BUILD_TABLE,
	GET_TABLE_DATA,

	// form
	GET_CURRENT_FORM,
	REMOVE_FORM,
		
} from '../actionCreator/';

// fetch loader
export const showFetchLoader = () => (dispatch) => 
	Promise.resolve().then(() => {
		return dispatch({
			type: SHOW_FETCH_LOADER
		})
	})

export const hideFetchLoader = () => ({
	type: HIDE_FETCH_LOADER
})

// post loader
export const showPostLoader = () => (dispatch) => 
	Promise.resolve().then(() => {
		return dispatch({
			type: SHOW_POST_LOADER
		})
	})

export const hidePostLoader = () => ({
	type: HIDE_POST_LOADER
})

// build serverside table
export const buildTable = (data) => (dispatch) => 
	Promise.resolve().then(() => {
		return dispatch({
			type: BUILD_TABLE,
			payload: { data }
		})
	})

export const getTableData = (api, pageSize, page) => (dispatch) => 
	Promise.resolve().then(() => {
		return dispatch({
			type: GET_TABLE_DATA,
			payload: { api, pageSize, page }
		})
	})

export const getCurrentForm = (form) => (dispatch) => 
	Promise.resolve().then(() => {
		return dispatch({
			type: GET_CURRENT_FORM,
			payload: { form }
		})
	})

export const removeForm = (form) => ({
	type: REMOVE_FORM
})