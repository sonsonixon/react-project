import { FETCH_USERS_BEGIN, 
         FETCH_USERS_SUCCESS, 
         FETCH_USERS_FAILURE, 
         ADD_TODO,
} from '../Constants';

export const addTodo = (todo) => ({
    type: ADD_TODO,
    payload: { todo }
})

// FETCH
export const fetchUsersBegin = () => ({
	type: FETCH_USERS_BEGIN
});

export const fetchUsersSuccess = (data) => ({
  	type: FETCH_USERS_SUCCESS,
  	payload: { data }
});

export const fetchUsersFailure = (error) => ({
  	type: FETCH_USERS_FAILURE,
  	payload: { error }
});


// Handle HTTP errors since fetch won't.
function handleErrors(response) {
  	if (!response.ok) {
    	throw Error(response.statusText);
  	}
  	return response;
}

export function fetchUsers() {
  	return dispatch => {
        dispatch(fetchUsersBegin());
	   	fetch('http://localhost/api/users/fetch')
	   	.then(handleErrors)
	   	.then(function(response){
	   		response.json()
	   		.then(function(data){
                return dispatch(fetchUsersSuccess(data));
	   		})
	   	})
      	.catch(error =>
        	dispatch(fetchUsersFailure(error))
      	);
  	};
}