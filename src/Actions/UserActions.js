// ACTION CONSTANTS
import { FETCH_USERS_BEGIN, 
         FETCH_USERS_SUCCESS, 
         FETCH_USERS_FAILURE,
         HANDLE_FIRSTNAME,
         HANDLE_MIDDLENAME,
         HANDLE_LASTNAME,
         HANDLE_USERNAME
} from '../Constants';

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

// INPUT HANDLING
export const handleFirstname = (firstname) => ({
    type: HANDLE_FIRSTNAME,
    payload: { firstname }
})

export const handleMiddlename = (middlename) => ({
    type: HANDLE_MIDDLENAME,
    payload: { middlename }
})

export const handleLastname = (lastname) => ({
    type: HANDLE_LASTNAME,
    payload: { lastname }
})

export const handleUsername = (username) => ({
    type: HANDLE_USERNAME,
    payload: { username }
})

// HANDLE HTTP ERRORS SINCE FETCH WONT.
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