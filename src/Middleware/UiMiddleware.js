import {
	// serverside table
	getTableData,

	// form
	getCurrentForm,
	removeForm,

	// hide post loader
	hidePostLoader,
	
} from '../Actions/UiActions';

import {
	fetchTableData
} from './ApiMiddleware';

import {
	handleErrorsTodos,
} from './TodosMiddleware';

import {
	handleErrorsUSERS
} from './UsersMiddleware';

// reset form
import { reset } from 'redux-form';

// plugins
import swal from 'sweetalert2';
import Noty from 'noty';
import mojs from 'mo-js';

// handle api response
export function handleResponse(data) {
	return function(dispatch) {
		let code = data.code;
		switch(code) {
			case 'success':
				dispatch(handleSuccess(data));
				break;
			case 'error':
				dispatch(handleErrors(data));
				break
			default:
				// do nothing
		}
		dispatch(hidePostLoader());
	}
}

// handle successful api request
export function handleSuccess(data) {
	return function(dispatch) {
		dispatch(showSuccessMessage(data))
		.then(() => {
			dispatch(resetForm());
		})
		.then(() => {
			dispatch(refreshTable());
		})
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

// show success message
export function showSuccessMessage(message) {
	return function(dispatch) {
		const successMessage = swal({
		  	title 			  : message.title,
		  	text 			  : message.message,
		  	type 			  : 'success',
		  	confirmButtonColor: '#3085d6',
		  	confirmButtonText : 'Yes, Got it!'
		})

		return successMessage;
	}
}

// handle errors
export function handleErrors(data) {
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
		    text     : '<strong>' + message + '</strong>',
		    timeout  : 3000,
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

// serverside table
export function renderTable(url, pageSize, page) {
	return function(dispatch) {
		return dispatch(
			fetchTableData(url, pageSize, page)
		)
	}
}

// save table data ( url, pageSize, page )
export function saveTableData(url, pageSize, page) {
	return function(dispatch) {
		return dispatch(getTableData(url, pageSize, page));
	}
}

// refresh table
export function refreshTable() {
	return function(dispatch, getState) {
		const { ui } = getState();
		let url = ui.url;
		let pageSize = ui.pageSize;
		let page = ui.page;

		if(url !== null) {
			dispatch(renderTable(url, pageSize, page));
		}
	}
}

// destroy table
export function destroyTable() {
	return function(dispatch) {
		dispatch({ type: '[SERVERSIDE_TABLE] DESTROY_TABLE' });
	}
}

// save form name
export function saveCurrentForm(form) {
	return function(dispatch) {
		dispatch(getCurrentForm(form));
	}
}

// remove form name
export function clearForm() {
	return function(dispatch) {
		dispatch(removeForm());
	}
}
		