export const FETCH_USERS_BEGIN   = 'FETCH_USERS_BEGIN';
export const FETCH_USERS_SUCCESS = 'FETCH_USERS_SUCCESS';
export const FETCH_USERS_FAILURE = 'FETCH_USERS_FAILURE';

export const fetchUsersBegin = () => ({
	type: FETCH_USERS_BEGIN
});

export const fetchUsersSuccess = data => ({
  	type: FETCH_USERS_SUCCESS,
  	payload: { data }
});

export const fetchUsersFailure = error => ({
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
        console.log('FETCH BEGINS');
        dispatch(fetchUsersBegin());
	   	fetch('https://jsonplaceholder.typicode.com/users')
	   	.then(handleErrors)
	   	.then(function(response){
	   		response.json()
	   		.then(function(data){
                console.log('FETCHING...');
	   			setTimeout(() => {
	   				console.log('FETCH SUCCESS');
		          	return dispatch(fetchUsersSuccess(data));
        			
		        }, 2500);
	   		})
	   	})
      	.catch(error =>
        	dispatch(fetchUsersFailure(error))
      	);
  	};
}