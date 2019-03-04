import {
	RECEIVE_USERDATA,
	AUTHENTICATE,
	REMOVE_USERDATA,
	DEAUTHENTICATE,
} from '../actionCreator/';

export const removeUserData = () => (dispatch) => {
	return dispatch({
		type: REMOVE_USERDATA
	})
}

export const deauthenticate = () => (dispatch) => {
	return dispatch({
		type: DEAUTHENTICATE
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