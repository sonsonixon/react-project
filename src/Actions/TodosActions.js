import {
	CLEAR_ERRORS,
	HAS_ERROR_TITLE,
	HAS_ERROR_USERID,
} from '../ActionCreator';

export const clearErrors = () => (dispatch) => Promise.resolve().then(() => {
	return dispatch ({
		type: CLEAR_ERRORS
	})
})

export const hasErrorTitle = () => ({
	type: HAS_ERROR_TITLE
})

export const hasErrorUserId = () => ({
	type: HAS_ERROR_USERID
})

/*
export const ADD_REQUEST_BEGIN = '[TODO] ADD_TODO_REQUEST_BEGIN';
export const AddRequestBegin = () => ({
	type: ADD_REQUEST_BEGIN
})

export const ADD_SUCCESS = '[TODO] ADD_TODO_SUCCESS';
export const AddSuccess = () => ({
	type: ADD_SUCCESS
})

export const ADD_FAILED = '[TODO] ADD_TODO_FAILED';
export const AddFailed = () => ({
	type: ADD_FAILED
})

export const CLEAR_STATE_TODO = '[TODO] CLEAR_STATE_TODO';
export const ClearStateTodo = () => ({
	type: CLEAR_STATE_TODO
})

export const CHANGE_USERID = '[TODO] CHANGE_USERID';
export const ChangeUserId = (data) => ({
	type: CHANGE_USERID,
	payload: { data }
})

export const CHANGE_TITLE = '[TODO] CHANGE_TITLE';
export const ChanUPDATEitle = (data) => ({
	type: CHANGE_TITLE,
	payload: { data }
})

export const FETCH_REQUEST_BEGIN = '[TODO] FETCH_REQUEST_BEGIN';
export const FetchRequestBegin = () => ({
	type: FETCH_REQUEST_BEGIN
})

export const FETCH_SUCCESS = '[TODO] FETCH_SUCCESS';
export const FetchSuccess = () => ({
	type: FETCH_SUCCESS
})

export const FETCH_FAILED = '[TODO] FETCH_FAILED';
export const FetchFailed = (data) => ({
	type: FETCH_FAILED,
	payload: { data }
})

export const UPDATE_TODOS = '[TODO] UPDATE_TODOS';
export const UpdateTodos = (data) => ({
	type: UPDATE_TODOS,
	payload: { data }
})
*/