import {
	RECEIVE_TOKEN,
	RECEIVE_USERDATA,
	AUTHENTICATE,
} from '../actionCreator/';

export const receiveToken = (token) => (dispatch) => {
	return dispatch({
		type: RECEIVE_TOKEN,
		payload: { token }
	})
}

export const receiveUserData = ( data ) => (dispatch) => {
	return dispatch({
		type: RECEIVE_USERDATA,
		payload: { data }
	})
}

export const authenticate = () => (dispatch) => {
	return dispatch({
		type: AUTHENTICATE
	})
}