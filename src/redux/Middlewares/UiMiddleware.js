import {
	showFetchLoader,
	hideFetchLoader,
	//showPostLoader,
	hidePostLoader,

	setTableData,
	createTable,
	destroyTable,

	// form
	setForm,
	destroyForm,
	// data
	setDataUsers,
} from '../ActionCreators/UiActions';

// redux form
import { reset } from 'redux-form';

import {
	//setCurrentUser
} from '../ActionCreators/UserActions';

import {
	clearUSERS,
} from '../ActionCreators/UsersActions';

import {
	clearClassTodos
} from '../ActionCreators/TodosActions';

import {
	handleErrorsTodos,
} from './TodosMiddleware';

import {
	handleErrorsUSERS
} from './UsersMiddleware';

// plugins
import swal from 'sweetalert';
import Noty from 'noty';
import mojs from 'mo-js';
import { push } from 'connected-react-router';

// apisauce
import apiCreator from '../../Services/apiCreator';
 
const api = apiCreator.create();

// serverside table handlers
export function handleTableCreation(url, pageSize, page) {
	return function(dispatch) {
		dispatch(showFetchLoader());
		return api[url](pageSize, page)
		.then((res) => {
			dispatch(setTableData(url, pageSize, page));
			dispatch(createTable(res.data));
		})
		.then(() => {
			dispatch(hideFetchLoader());
		})
	}
}

export function handleTableDestroy() {
	return function(dispatch) {
		return dispatch(destroyTable());
	}
}


// fetch request response handler
export function handleFetchResponse(data) {
	return function(dispatch) {
		const code = data.code;
		const user = data.data;
		switch(code) {
			case 'users':
				dispatch(setDataUsers(user));
				break;
			default:
			 	// default
		}
	}
}

// post request response handler
export function handlePostResponse(data) {
	return function(dispatch) {
		const code = data.code;
		switch(code) {
			case 'success':
				dispatch(handleSuccessResponse(data));
				break;
			case 'error':
				dispatch(handleErrorResponse(data));
				break
			default:
				// do nothing
		}
		dispatch(hidePostLoader());
	}
}

// success response handler
export function handleSuccessResponse(data) {
	return function(dispatch) {
		const request = data.request;
		switch(request) {
			case 'post':
				dispatch(postSuccessMessage(data));
				break;
			case 'update':
				dispatch(updateSuccessMessage(data));
				break;
			default:
				// default
		}
	}
}

// reset form
export function resetForm() {
	return function(dispatch, getState) {
		const { ui } = getState();
		let currentForm = ui.currentForm;
		if(currentForm !== ''){
			dispatch(reset(currentForm));
		}
	}
}

// success messages
export function postSuccessMessage(data) {
	return function(dispatch) {
		const message = swal({
		  	title : data.title,
		  	text : data.message,
		  	icon : 'success',
		  	buttons: {
			    cancel: "Add another item",
			    catch: {
			      	text: "Go to list",
			      	value: "redirect",
			    }
		  	},
		})
		.then((value) => {
			switch (value) {
			    case "redirect":
			      	dispatch(redirect(data.redirect));
			      	break;
			    default:
			      	dispatch(resetForm());
					dispatch(handleFormClear());
		  	}
		});
		return message;
	}
}

export function updateSuccessMessage(data) {
	return function(dispatch) {
		const message = swal({
			title : data.title,
		  	text : data.message,
		  	icon : 'success',
		  	buttons: {
			    cancel: "Edit another field",
			    catch: {
			      	text: "Go to list",
			      	value: "redirect",
			    }
		  	},
		})
		.then((value) => {
			switch (value) {
			    case "redirect":
			      	dispatch(redirect(data.redirect));
			      	break;
			    default:
					//
		  	}
		});
		return message;
	}
}

// handle errors
export function handleErrorResponse(data) {
	return function(dispatch) {
		dispatch(handleErrorMessages(data.errors));
		let mod = data.module;
		//let keys = Object.keys(data.errors);
		switch(mod) {
			case 'todos':
				dispatch(handleErrorsTodos(data.errors));
				break;
			case 'users':
				dispatch(handleErrorsUSERS(data.errors));
				break
			default:
				// do nothing
		}
	}
}

// handle error messages
export function handleErrorMessages(errorMessages) {
	return function(dispatch) {
		Object.keys(errorMessages).forEach(key => {
			const messages = errorMessages[key];
			messages.forEach(message => {
				dispatch(showErrorMessage(message));
			})
		})
	}
}

// show error message
export function showErrorMessage(message) {
	return function() {
		new Noty({
			type   	 : 'error',
			theme  	 : 'metroui',
		    text     : '<i class="fa fa-fw fa-2x fa-exclamation-triangle"></i> ' + message,
		    timeout  : 4000,
    		layout 	 : "topRight",
    		animation: {
			        open: function (promise) {
			            var n = this;
			            var Timeline = new mojs.Timeline();
			            var body = new mojs.Html({
			                el        : n.barDom,
			                x         : {500: 0, delay: 0, duration: 500, easing: 'elastic.out'},
			                isForce3d : true,
			                onComplete: function () {
			                    promise(function(resolve) {
			                        resolve();
			                    })
			                }
			            });

			            var parent = new mojs.Shape({
			                parent: n.barDom,
			                width      : 200,
			                height     : n.barDom.getBoundingClientRect().height,
			                radius     : 0,
			                x          : {150: -150},
			                duration   : 1.2 * 500,
			                isShowStart: true
			            });

			            n.barDom.style['overflow'] = 'visible';
			            parent.el.style['overflow'] = 'hidden';

			            var burst = new mojs.Burst({
			                parent  : parent.el,
			                count   : 10,
			                top     : n.barDom.getBoundingClientRect().height + 75,
			                degree  : 90,
			                radius  : 75,
			                angle   : {[-90]: 40},
			                children: {
			                    fill     : '#191919',
			                    delay    : 'stagger(500, -50)',
			                    radius   : 'rand(8, 25)',
			                    direction: -1,
			                    isSwirl  : true
			                }
			            });

			            var fadeBurst = new mojs.Burst({
			                parent  : parent.el,
			                count   : 2,
			                degree  : 0,
			                angle   : 75,
			                radius  : {0: 100},
			                top     : '90%',
			                children: {
			                    fill     : '#323232',
			                    pathScale: [.65, 1],
			                    radius   : 'rand(12, 15)',
			                    direction: [-1, 1],
			                    delay    : .8 * 500,
			                    isSwirl  : true
			                }
			            });

			            Timeline.add(body, burst, fadeBurst, parent);
			            Timeline.play();
			        },
			        close: function (promise) {
			            var n = this;
			            new mojs.Html({
			                el        : n.barDom,
			                x         : {0: 500, delay: 10, duration: 500, easing: 'cubic.out'},
			                skewY     : {0: 10, delay: 10, duration: 500, easing: 'cubic.out'},
			                isForce3d : true,
			                onComplete: function () {
			                    promise(function(resolve) {
			                        resolve();
			                    })
			                }
			            }).play();
			        }}
		}).show();
	}
}

// reload table
/*export function handleTableReload() {
	return function(dispatch, getState) {
		const { ui } = getState();
		let url 	 = ui.url;
		let pageSize = ui.pageSize;
		let page 	 = ui.page;

		if(url !== null) {
			//dispatch(handleTableCreation(url, pageSize, page));
		}
	}
}*/

export function handleFormClear() {
	return function(dispatch, getState) {
		const { ui } = getState();
		const form = ui.currentForm;
		switch(form) {
			case 'createUser':
				dispatch(clearUSERS());
				break;
			case 'addTodo':
				dispatch(clearClassTodos());
				break;
			default:
				// default
		}
	}
}

// save form
export function handleSetForm(form) {
	return function(dispatch) {
		dispatch(setForm(form));
	}
}

// remove form
export function handleFormDestroy() {
	return function(dispatch) {
		dispatch(destroyForm());
	}
}

// redirect
export function redirect(location) {
	return function(dispatch) {
		dispatch(push(location));
	}
}
		