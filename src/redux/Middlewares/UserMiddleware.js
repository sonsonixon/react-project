/**
 * Action Creators
 *
 *
**/
import {
	showPostLoader,
	hidePostLoader,
} from '../ActionCreators/UiActions';

import {
	setCurrentUser,
	setUuid,
	destroyUserData,
	authenticate,
	deauthenticate,
} from '../ActionCreators/UserActions';

/**
 * Middlewares
 *
 *
**/
import { redirect } from './UiMiddleware';

/**
 * Plugins
 *
 *
**/
import swal from 'sweetalert';
import apiCreator from '../../Services/apiCreator';

const api = apiCreator.create();

export function login(data) {
	return function(dispatch) {
		dispatch(showPostLoader());
		return api.login(data)
		.then((res) => {
			let code = res.data.code;
			switch(code) {
				case 'success':
					dispatch(handleLoginSuccess(res.data));
					break;
				case 'error':
					dispatch(handleLoginError(res.data));
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
		}).then((value) => {
		  	switch (value) {
			    case "logout":
			      	Promise.all([
			      		dispatch(destroyToken()),
			      		dispatch(destroyUserData()),
			      	]).then(() => {
			      		swal({
			      			text: 'Logging out...',
			      			timer: 2000,
			      			buttons: {
			      				closeModal: false
			      			}
			      		})
			      		.then(() => {
							dispatch(deauthenticate());
			      		})	      		
			      	})
			      	break;
			    default:
			      	// do nothing
		  	}
		})
	}
}

function setToken(token) {
	return function() {
		try {
			const serializedToken = JSON.stringify(token)
			localStorage.setItem('token', serializedToken);
		} catch (err) {
			//
		}
	}
}

function destroyToken() {
	return function() {
		localStorage.removeItem('token');
	}
}

function handleLoginSuccess(user) {
	return function(dispatch) {
		Promise.all([
			dispatch(setToken(user.token)),
			dispatch(setUuid(user.uuid)),
			dispatch(authenticate()),
		])
		.then(() => {
			swal({
      			text: 'Redirecting...',
      			timer: 2000,
      			buttons: false,
      		})
      		.then(() => {
      			dispatch(redirect('/'));
      		})			
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

export function getCurrentUser(uuid) {
	return function(dispatch) {
		return api.getUser(uuid)
		.then((res) => {
			dispatch(setCurrentUser(res.data));
		})
	}
}