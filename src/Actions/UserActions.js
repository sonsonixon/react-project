// ACTION CONSTANTS
import { FETCH_USERS_BEGIN, 
         FETCH_USERS_SUCCESS,
         FETCH_USERS_FAILURE,
         GET_FIRSTNAME,
         GET_MIDDLENAME,
         GET_LASTNAME,
         GET_USERNAME,
         CREATE_USER_BEGIN,
         CREATE_USER_SUCCESS,
         CREATE_USER_FAIL,
         CLEAR_USERS_STATE,
         IS_VALID_FIRSTNAME,
         IS_INVALID_FIRSTNAME
} from '../Constants';

import apiCreator from '../Services/Api';

import swal from 'sweetalert2'

const api = apiCreator.create();

const toast = swal.mixin({
    toast: true,
    position: 'top-end',
    showConfirmButton: false,
    timer: 6000,
    allowEscapeKey: false,
});

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
export const getFirstname = (firstname) => ({
    type: GET_FIRSTNAME,
    payload: { firstname }
})

export const getMiddlename = (middlename) => ({
    type: GET_MIDDLENAME,
    payload: { middlename }
})

export const getLastname = (lastname) => ({
    type: GET_LASTNAME,
    payload: { lastname }
})

export const getUsername = (username) => ({
    type: GET_USERNAME,
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

// CLEAR STATES
export const clearUsersState = () => ({
    type: CLEAR_USERS_STATE
})

export const isValidFirstname = () => ({
    type: IS_VALID_FIRSTNAME
})

export const isInvalidFirstname = () => ({
    type: IS_INVALID_FIRSTNAME
})

export function addClassFirstname(input) {
    return dispatch => {
        (input) ? dispatch(isValidFirstname()) : dispatch(isInvalidFirstname())
    }
}



// FETCH ALL USERS
export function fetchUsers() {
  	return dispatch => {
        dispatch(fetchUsersBegin());
	   	api.fetch()
        //.then(handleErrors)
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
            //.then(handleErrors)
            .then((res) => {
                dispatch(createUserSuccess());
                if(res.data.code === 'success'){
                    dispatch(clearUsersState());
                    swal({
                        title: 'Error!',
                        text: 'Do you want to continue',
                        type: 'success',
                        confirmButtonText: 'Cool'
                    })
                    console.log(res.data);
                }
                else{
                    
                    let errors = res.data.errors;
                    let errorMessage = '';

                    // Map response object
                    Object.keys(errors).forEach(key => {
                        switch(key){
                            case 'first_name':
                                break;
                            default:  
                        }
                        errors[key].forEach(message => 
                            errorMessage += message + '<br/><br/>'
                        );
                    });

                    // Show error messages on a toast notification
                    toast({
                        type:   'error',
                        html:   '<b>' +
                                    '<br/>' +
                                    errorMessage +
                                '</b>'
                    });
                }                
            })
            .catch(error => 
                dispatch(createUserFail())
            ); 
        }, 2000);       
    }
}