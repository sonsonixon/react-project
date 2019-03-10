/**
 * Action Creators
 *
 *
**/
import {
	showPostLoader,
} from '../ActionCreators/UiActions';

import {
	// first names
	hasErrorFIRSTNAME,
	setErrorFIRSTNAME,
	// middle name
	hasErrorMIDDLENAME,
	setErrorMIDDLENAME,
	// last name
	hasErrorLASTNAME,
	setErrorLASTNAME,
	// username
	hasErrorUSERNAME,
	setErrorUSERNAME,
	// password
	hasErrorPASSWORD,
	setErrorPASSWORD,
	// status
	hasErrorSTATUS,
	setErrorSTATUS,
	// role
	hasErrorROLE,
	setErrorROLE,
} from '../ActionCreators/UsersActions';

/**
 * Middlewares
 *
 *
**/
import {
	handlePostResponse,
	handleFetchResponse,
} from './UiMiddleware';

import apiCreator from '../../Services/apiCreator';

const api = apiCreator.create();

export function handleErrorsUSERS(data) {
	return function(dispatch) {
		Object.keys(data).forEach(key => {
			const message = data[key];
			switch(key) {
				case 'first_name':
					dispatch(hasErrorFIRSTNAME());
					dispatch(setErrorFIRSTNAME(message));
					break;
				case 'middle_name':
					dispatch(hasErrorMIDDLENAME());
					dispatch(setErrorMIDDLENAME(message));
					break;
				case 'last_name':
					dispatch(hasErrorLASTNAME());
					dispatch(setErrorLASTNAME(message));
					break;
				case 'username':
					dispatch(hasErrorUSERNAME());
					dispatch(setErrorUSERNAME(message));
					break;
				case 'password':
					dispatch(hasErrorPASSWORD());
					dispatch(setErrorPASSWORD(message));
					break;
				case 'status':
					dispatch(hasErrorSTATUS());
					dispatch(setErrorSTATUS(message));
					break;
				case 'role':
					dispatch(hasErrorROLE());
					dispatch(setErrorROLE(message));
					break;
				default:
					// do nothing
			}
		})
	}
}

export function fetchUser(uuid) {
	return function(dispatch) {
		return api.fetchUser(uuid)
		.then((res) => {
			dispatch(handleFetchResponse(res.data));
		});
	}
}

export function createUser(data) {
	return function(dispatch) {
		dispatch(showPostLoader());
		return api.createUser(data)
		.then((res) => {
			dispatch(handlePostResponse(res.data))
		})
	}
}

export function updateUser(uuid, data) {
	return function(dispatch) {
		dispatch(showPostLoader());
		return api.updateUser(uuid, data)
		.then((res) => {
			dispatch(handlePostResponse(res.data));
		})
	}
}