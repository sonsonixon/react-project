import {
	postRequest
} from './ApiMiddleware';

import {
	showPostLoader,
} from '../Actions/UiActions';

import {
	clearUSERS,
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
} from '../Actions/UserActions';

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

export function createUser(url, data) {
	return function(dispatch) {
		return dispatch(
			showPostLoader()
		)
		.then(() => {
			setTimeout(() => {
				dispatch(postRequest(url, data));
			}, 2000)
		})
		.then(() => {
			dispatch(clearUSERS());
		})
	}
}