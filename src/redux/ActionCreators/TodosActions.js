import {
	CLEAR_CLASS_TODOS,
	// userid
	HAS_ERROR_USERID,
    HAS_SUCCESS_USERID,
    IS_VALID_USERID,
    SET_ERROR_USERID,
    CLEAR_USERID,

    // title
    HAS_ERROR_TITLE,
    HAS_SUCCESS_TITLE,
    IS_VALID_TITLE,
    SET_ERROR_TITLE,
    CLEAR_TITLE,
} from '../Actions/';

export const clearClassTodos = () => (dispatch) => Promise.resolve().then(() => {
	return dispatch ({
		type: CLEAR_CLASS_TODOS
	})
})

// userid
export const hasErrorUserid = () => ({
	type: HAS_ERROR_USERID,
})

export const hasSuccessUserid = () => ({
	type: HAS_SUCCESS_USERID,
})

export const isValidUserid = () => ({
	type: IS_VALID_USERID
})

export const setErrorUserid = (message) => (dispatch) => Promise.resolve().then(() => {
	return dispatch({
		type: SET_ERROR_USERID,
		payload: { message }
	})
})

export const clearUserid = () => ({
	type: CLEAR_USERID
})


// title
export const hasErrorTitle = () => ({
	type: HAS_ERROR_TITLE
})

export const hasSuccessTitle = () => ({
	type: HAS_SUCCESS_TITLE
})

export const isValidTitle = () => ({
	type: IS_VALID_TITLE
})

export const setErrorTitle = (message) => (dispatch) => Promise.resolve().then(() => {
	return dispatch({
		type: SET_ERROR_TITLE,
		payload: { message }
	})
})

export const clearTitle = () => ({
	type: CLEAR_TITLE
})