import {
	SET_CURRENT_USER,
	SET_UUID,
	DESTROY_USER_DATA,
	AUTHENTICATE,
	DEAUTHENTICATE,
} from '../Actions/';

export const setCurrentUser = (data) => ({
	type: SET_CURRENT_USER,
	payload: { data }
})

export const setUuid = (uuid) => ({
	type: SET_UUID,
	payload: { uuid }
})

export const destroyUserData = () => ({
	type: DESTROY_USER_DATA
})

export const authenticate = () => ({
	type: AUTHENTICATE
})

export const deauthenticate = () => ({
	type: DEAUTHENTICATE
})




