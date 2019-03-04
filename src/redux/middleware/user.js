// actions
import {
	showPostLoader,
	hidePostLoader,
} from '../actions/ui'

import {
	receiveUserData,
	authenticate,
	removeUserData,
	deauthenticate,
} from '../actions/user';

// api sauce
import apiCreator from '../../services/api';

import swal from 'sweetalert';

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
			dispatch(hidePostLoader());
		})
	}
}

export function logout() {
	return function(dispatch) {
		swal({
		  	title: 'Logout',
		  	text: 'Are you sure you want to logout?',
		  	icon: 'warning',
		  	buttons: {
			    cancel: "Cancel",
			    logout: {
			      	text: "Yes, Log me out",
			      	value: "logout",
			    },
		  	},
		}).then((res) => {
		  	switch (res) {
			    case "logout":
			      	Promise.all([
			      		dispatch(removeTokenFromLocalStorage()),
			      		dispatch(removeUserData()),
			      		dispatch(deauthenticate()),
			      	]).then(() => {
			      		dispatch(redirect('/login'))
			      	})
			      	break;
			    default:
			      	// do nothing
		  	}
		})
	}
}

function redirect(location) {
	return function(dispatch) {
		dispatch(push(location));
	}
}

function removeTokenFromLocalStorage() {
	return function() {
		localStorage.removeItem('token');
	}
}

function saveTokenToLocalStorage(token) {
	return function() {
		localStorage.setItem('token', token);
	}
}

function handleLoginSuccess(user) {
	return function(dispatch) {
		Promise.all([
			dispatch(saveTokenToLocalStorage(user.token)),
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
		dispatch(showLoginErrorMessage(data))
	}
}

function showLoginErrorMessage(error) {
	return function() {
		const errorMessage = swal({
		  	title 	: error.title,
		  	text 	: error.message,
		  	icon 	: 'error',
		})
		return errorMessage;
	}
}