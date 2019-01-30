import {
	updateUserid,
	updateTitle
} from '../Actions/TodosActions';

import {
	/*validUserid,
	invalidUserid,
	validTitle,
	invalidTitle*/
} from '../Actions/UiActions';

/*
import apiCreator from '../Services/Api';
import swal from 'sweetalert2';

const api = apiCreator.create();
*/

export function getUserid(data) {
	return function(dispatch) {
		//(data) ? dispatch(validUserid()) : dispatch(invalidUserid());
		dispatch(updateUserid(data));
	}
}

export function getTitle(data) {
	return function(dispatch) {
		//(data) ? dispatch(validTitle()) : dispatch(invalidTitle());
		dispatch(updateTitle(data));
	}
}

/*

export function addTodo(userid, title) {
	return dispatch => {	
		dispatch(AddRequestBegin());
		dispatch(ShowPostLoader());
		setTimeout(() => {
			api.addTodo(userid, title)
			//.then(handleErrors)
			.then((res) => {
				switch(res.data.code){
					case 'success':
						// request is success
						dispatch(AddSuccess());
						dispatch(ClearClassTodo());
						dispatch(ClearStateTodo());
						swal({
						  	title: res.data.title,
						  	text: res.data.message,
						  	type: 'success',
						  	confirmButtonText: 'Okay, Got it!'
						}).then((result) => {
						  	if (result.value) {
						  		// Refresh table
						  		
						  	}
						})
						
						//console.log(res.data);
						break;
					case 'error':
						// response return with errors
						dispatch(AddFailed());
						let errors = res.data.errors;
						Object.keys(errors).forEach(key => {
							switch(key){
								case 'title':
									dispatch(InvalidTitle());
									break;
								case 'userid':
									dispatch(InvalidUserID());
									break;
								default:
									// Do nothing
							}
						})
						break;
					default:
						// Do nothing or dispatch some request failed action
				}
				dispatch(HidePostLoader());
			})			  
		}, 500);
	}
}
*/
			