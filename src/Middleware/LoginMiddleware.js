// actions
import {
	isSubmitting,
	isSubmitted,
} from '../Actions/LoginActions';

import apiCreator from '../Services/Api';
 
const api = apiCreator.create();

export function login(data) {
	return function(dispatch) {
		return dispatch(
			isSubmitting()
		)
		.then(() => {
			api.login(data)
			.then((res) => {
				console.log(res.data);
				dispatch(isSubmitted());
			})
		})
	}
}