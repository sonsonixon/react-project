import {
	API_REQUEST,
	REQUEST_SUCCESS,
	REQUEST_FAILED
} from '../ActionCreator';

export const apiRequest = () => (dispatch) => Promise.resolve().then(() => {
	return dispatch({
		type: API_REQUEST
	})
})

export const requestSuccess = () => (dispatch) => Promise.resolve().then(() => {
	return dispatch({
		type: REQUEST_SUCCESS
	})
})

export const requestFailed = () => ({
	type: REQUEST_FAILED
})