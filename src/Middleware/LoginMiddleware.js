// actions
import {
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
			isSubmitting()
		)
		.then(() => {
			api.login(data)
			.then((res) => {
				let code = res.data.code;
				switch(code) {
					case 'error':
						dispatch(handleLoginError(res.data));
						break;
					case 'success':
						dispatch(handleLoginSuccess(res.data));
						break;
					default:
						// do nothing
				}
			})
			.then(() => {
				dispatch(isSubmitted());
			})
		})
	}
}

function handleRedirect() {
	return function(dispatch) {
		dispatch(push('/'));
	}
}

function handleLoginSuccess(user) {
	return function(dispatch) {
		localStorage.setItem('user', JSON.stringify(user.data));
        localStorage.setItem('token', user.token);
        dispatch(handleRedirect());
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
		const LoginErrorMessage = swal({
		  	title 	: error.title,
		  	text 	: error.message,
		  	type 	: 'error',
		})
		return LoginErrorMessage;
	}
}