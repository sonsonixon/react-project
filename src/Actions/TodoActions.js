import {
	ADD_REQUEST_BEGIN,
	ADD_SUCCESS,
	ADD_FAILED,
	CHANGE_USERID,
	CHANGE_TITLE,
	CLEAR_STATE_TODO,
	FETCH_REQUEST_BEGIN,
	FETCH_SUCCESS,
	FETCH_FAILED,
	UPDATE_TODOS,
} from '../Constants';

export const AddRequestBegin = () => ({
	type: ADD_REQUEST_BEGIN
})

export const AddSuccess = () => ({
	type: ADD_SUCCESS
})

export const AddFailed = () => ({
	type: ADD_FAILED
})

export const ClearStateTodo = () => ({
	type: CLEAR_STATE_TODO
})

export const ChangeUserId = (data) => ({
	type: CHANGE_USERID,
	payload: { data }
})

export const ChangeTitle = (data) => ({
	type: CHANGE_TITLE,
	payload: { data }
})

export const FetchRequestBegin = () => ({
	type: FETCH_REQUEST_BEGIN
})

export const FetchSuccess = () => ({
	type: FETCH_SUCCESS
})

export const FetchFailed = (data) => ({
	type: FETCH_FAILED,
	payload: { data }
})

export const UpdateTodos = (data) => ({
	type: UPDATE_TODOS,
	payload: { data }
})