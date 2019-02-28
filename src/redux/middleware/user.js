// actions
import {
	showPostLoader,
	hidePostLoader,
} from '../actions/ui'

import {
	receiveToken,
	receiveUserData,
	authenticate,
} from '../actions/user';
// api sauce
import apiCreator from '../../services/api';

import swal from 'sweetalert2';

import { push } from 'connected-react-router';
 
const api = apiCreator.create();

export function login(data) {
	return function(dispatch) {
		dispatch(showPostLoader());
		return api.login(data)
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
			dispatch(hidePostLoader())
		})
	}
}

export function logout() {
	return function(dispatch) {
		swal({
		  	title: 'Logout',
		  	text: 'Are you sure you want to logout?',
		  	type: 'info',
		  	showCancelButton: true,
		  	confirmButtonColor: '#3085d6',
		  	cancelButtonColor: '#d33',
		  	confirmButtonText: 'Yes, Log me out'
		}).then((res) => {
		  	if (res.value) {
			   	console.log('he really wants to logout')
		  	}
		})
	}
}

function redirect(location) {
	return function(dispatch) {
		dispatch(push(location));
	}
}

function handleLoginSuccess(user) {
	return function(dispatch) {
		Promise.all([
			dispatch(receiveToken(user.token)),
			dispatch(receiveUserData(user.data)),
			dispatch(authenticate()),
		])
		.then(() => {
			dispatch(redirect('/'));
		})
	}
}

function handleLoginError(data) {
	return function(dispatch) {
		return dispatch(showLoginErrorMessage(data))
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