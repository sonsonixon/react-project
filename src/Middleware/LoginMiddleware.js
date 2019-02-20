// actions
import {
	authenticate,
	isSubmitting,
	isSubmitted,
} from '../Actions/LoginActions';

import apiCreator from '../Services/Api';
import swal from 'sweetalert2';

import { push } from 'connected-react-router';
 
const api = apiCreator.create();

export function login(data) {
	return function(dispatch) {
		return dispatch(
			// submitting
			isSubmitting()
		)
		.then(() => {
			// api request -> login
			api.login(data)
			.then((res) => {
				let code = res.data.code;
				switch(code) {
					case 'error':
						// login error
						dispatch(handleLoginError(res.data));
						break;
					case 'success':
						// login success
						dispatch(handleLoginSuccess(res.data));
						break;
					default:
						// do nothing
				}
			})
			.then(() => {
				// sumitted
				dispatch(isSubmitted())
				.then(() => {
					// redirect
					dispatch(handleRedirect('/'));
				})
			})
		})
	}
}

function handleRedirect(location) {
	return function(dispatch) {
		dispatch(push(location));
	}
}

function handleLoginSuccess(user) {
	return function(dispatch) {
		localStorage.setItem('user', JSON.stringify(user.data));
        localStorage.setItem('token', user.token);
        dispatch(authenticate(user.data));
	}
}

function handleLoginError(data) {
	return function(dispatch) {
		return dispatch(
			showLoginErrorMessage(data)
		)
	}
}

function showLoginErrorMessage(error) {
	return function() {
		const errorMessage = swal({
		  	title 	: error.title,
		  	text 	: error.message,
		  	type 	: 'error',
		})
		return errorMessage;
	}
}