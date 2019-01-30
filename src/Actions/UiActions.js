import {
	/* Loaders */
	SHOW_FETCH_LOADER,
	HIDE_FETCH_LOADER,

	/* Serverside Table */
	BUILD_TABLE,
	DESTROY_TABLE,

	/* Todos */
	IS_VALID_USERID,
	IS_INVALID_USERID,
	IS_VALID_TITLE,
	IS_INVALID_TITLE,

	// Submit Button
	ENABLE_SUBMIT_BUTTON,

	/*
	INVALID_USERID,
	INVALID_TITLE,
	VALID_USERID,
	VALID_TITLE,
	CLEAR_CLASS_USERID,
	CLEAR_CLASS_TITLE,
	CLEAR_CLASS_TODO,
	SHOW_POST_LOADER,
	HIDE_POST_LOADER,
	*/
	
} from '../ActionCreator';

// Api
export const showFetchLoader = () => (dispatch) => Promise.resolve().then(() => {
	return dispatch({
		type: SHOW_FETCH_LOADER
	})
})

export const hideFetchLoader = () => (dispatch) => Promise.resolve().then(() => {
	return dispatch({
		type: HIDE_FETCH_LOADER
	})
})

// Serverside Table
export const updateTable = (data) => (dispatch) => Promise.resolve().then(() => {
	return dispatch({
		type: BUILD_TABLE,
		payload: { data }
	})
})

export const voidTable = () => ({
	type: DESTROY_TABLE
})

// Todos
export const validUserid = () => ({
	type: IS_VALID_USERID
})

export const invalidUserid = () => ({
	type: IS_INVALID_USERID
})

export const validTitle = () => ({
	type: IS_VALID_TITLE
})

export const invalidTitle = () => ({
	type: IS_INVALID_TITLE
})

export const enableSubmitButton = () => ({
	type: ENABLE_SUBMIT_BUTTON
})
/*
export const showTableLoader = () => ({
	type: SHOW_TABLE_LOADER
})

export const hideTableLoader = () => ({
	type: HIDE_TABLE_LOADER
})

export const ClearClassTodo = () => ({
	type: CLEAR_CLASS_TODO
})

export const ClearClassUserID = () => ({
	type: CLEAR_CLASS_USERID
})

*/
/*
export const ClearClassTitle = () => ({
	type: CLEAR_CLASS_TITLE
})
*/

/*
export const InvalidUserID = () => ({
	type: INVALID_USERID
})

export const InvalidTitle = () => ({
	type: INVALID_TITLE
})

export const ValidUserID = () => ({
	type: VALID_USERID
})

export const ValidTitle = () => ({
	type: VALID_TITLE
})

export const ShowPostLoader = () => ({
	type: SHOW_POST_LOADER
})

export const HidePostLoader = () => ({
	type: HIDE_POST_LOADER
})
*/