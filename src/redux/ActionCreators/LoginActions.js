import {
	IS_VALID_username,
	IS_INVALID_username,
	IS_VALID_password,
	IS_INVALID_password,
} from '../Actions/';

export const isValidUSERNAME = () => ({
	type: IS_VALID_username
})

export const isInvalidUSERNAME = () => ({
	type: IS_INVALID_username
})

export const isValidPASSWORD = () => ({
	type: IS_VALID_password
})

export const isInvalidPASSWORD = () => ({
	type: IS_INVALID_password
})