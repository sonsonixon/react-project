import {
	AUTHENTICATE,
	IS_SUBMITTING,
	IS_SUBMITTED,
	IS_VALID_USERNAME,
	IS_VALID_PASSWORD,
	IS_INVALID_USERNAME,
	IS_INVALID_PASSWORD,
} from '../actionCreator/';

export const isSubmitting = () => (dispatch) => Promise.resolve().then(() => {
	return dispatch({
		type: IS_SUBMITTING,
	})
})

export const authenticate = (user, token) => (dispatch) => Promise.resolve().then(() => {
	return dispatch({
		type: AUTHENTICATE,
		payload: { user, token }
	})
})

export const isSubmitted = () => (dispatch) => Promise.resolve().then(() => {
	return dispatch({
		type: IS_SUBMITTED,
	})
})

export const isValidUSERNAME = () => ({
	type: IS_VALID_USERNAME
})

export const isValidPASSWORD = () => ({
	type: IS_VALID_PASSWORD
})

export const isInvalidUSERNAME = () => ({
	type: IS_INVALID_USERNAME
})

export const isInvalidPASSWORD = () => ({
	type: IS_INVALID_PASSWORD
})