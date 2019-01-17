// ACTION CONSTANTS
import { FETCH_USERS_BEGIN, 
         FETCH_USERS_SUCCESS, 
         FETCH_USERS_FAILURE,
         HANDLE_FIRSTNAME,
         HANDLE_MIDDLENAME,
         HANDLE_LASTNAME,
         HANDLE_USERNAME,
         CREATE_USER_BEGIN,
         CREATE_USER_SUCCESS,
         CREATE_USER_FAIL,
         CLEAR_FIELDS
} from '../Constants';

import API from '../Services/Api';

import swal from 'sweetalert2'

const api = API.create()

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

// CREATE
export const createUserBegin = () => ({
    type: CREATE_USER_BEGIN
})

export const createUserSuccess = () => ({
    type: CREATE_USER_SUCCESS
})

export const createUserFail = (error) => ({
    type: CREATE_USER_FAIL,
    payload: { error }
})

// Create a function that will clear states
export const clearFields = () => ({
    type: CLEAR_FIELDS
})

// HANDLE HTTP ERRORS SINCE FETCH WONT.
function handleErrors(response) {
  	if (!response.ok) {
    	throw Error(response.statusText);
  	}
  	return response;
}

// FETCH ALL USERS
export function fetchUsers() {
  	return dispatch => {
        dispatch(fetchUsersBegin());
	   	api.fetch()
        .then(handleErrors)
        .then((res) => {
            return dispatch(fetchUsersSuccess(res.data));
        })
        .catch(error =>
            dispatch(fetchUsersFailure(error))
        );
  	};
}

// CREATE NEW USER
export function createUser(firstname, lastname, username) {
    return dispatch => {
        dispatch(createUserBegin());
        setTimeout(() => {
            api.createUser(firstname, lastname, username)
            .then(handleErrors)
            .then((res) => {
                dispatch(createUserSuccess());
                if(res.data.code === 'success'){
                    dispatch(clearFields());
                    swal({
                        title: 'Error!',
                        text: 'Do you want to continue',
                        type: 'error',
                        confirmButtonText: 'Cool'
                    })
                    console.log(res.data);
                }
                else{
                    console.log(res.data);
                }                
            })
            .catch(error => 
                dispatch(createUserFail())
            ); 
        }, 2000);       
    }
}