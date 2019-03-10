import {
	SHOW_FETCH_LOADER,
	HIDE_FETCH_LOADER,

	SHOW_POST_LOADER,
	HIDE_POST_LOADER,

	SET_TABLE_DATA,
	CREATE_TABLE,
	DESTROY_TABLE,

	SET_FORM,
	DESTROY_FORM,

	SET_DATA_USERS,
	DESTROY_DATA_USERS,

} from '../Actions/';

// loaders
export const showFetchLoader = () =>({
	type: SHOW_FETCH_LOADER
})

export const hideFetchLoader = () => ({
	type: HIDE_FETCH_LOADER
})

export const showPostLoader = () => ({
	type: SHOW_POST_LOADER
})

export const hidePostLoader = () => ({
	type: HIDE_POST_LOADER
})

// serverside table
export const setTableData = (url, pageSize, page) => ({
	type: SET_TABLE_DATA,
	payload: { url, pageSize, page }
})

export const createTable = (data) => ({
	type: CREATE_TABLE,
	payload: { data }
})

export const destroyTable = () => ({
	type: DESTROY_TABLE
})

// form
export const setForm = (form) => ({
	type: SET_FORM,
	payload: { form }
})

export const destroyForm = (form) => ({
	type: DESTROY_FORM
})

// data
export const setDataUsers = (data) => ({
	type: SET_DATA_USERS,
	payload: { data }
})

export const destroyDataUsers = () => ({
	type: DESTROY_DATA_USERS
})