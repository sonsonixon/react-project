export const INCREMENT  = 'INCREMENT';
export const DECREMENT	= 'DECREMENT';

export const increment = () => {
  	return dispatch => {
	    dispatch({
	      	type: INCREMENT
	    })
  	}
}

export const decrement = () => {
  	return dispatch => {
    	dispatch({
      		type: DECREMENT
    	})
  	}
}


// Handle HTTP errors since fetch won't.
/*
function handleErrors(response) {
  	if (!response.ok) {
    	throw Error(response.statusText);
  	}
  	return response;
}

export function fetchUsers() {
  	return dispatch => {
  		setTimeout(() => {
  			console.log('FETCH BEGINS');
          	dispatch(fetchUsersBegin());
        }, 2500);
	   	fetch('https://jsonplaceholder.typicode.com/users')
	   	.then(handleErrors)
	   	.then(function(response){
	   		response.json()
	   		.then(function(data){
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
*/

