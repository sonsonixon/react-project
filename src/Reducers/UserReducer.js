import {
    FETCH_USERS_BEGIN,
    FETCH_USERS_SUCCESS,
    FETCH_USERS_FAILURE,
    HANDLE_FIRSTNAME,
    HANDLE_MIDDLENAME,
    HANDLE_LASTNAME,
    HANDLE_USERNAME,
    CREATE_USER,
    CREATE_USER_BEGIN,
    CREATE_USER_SUCCESS,
    CREATE_USER_FAIL,
    CLEAR_FIELDS
} from '../Constants';

const initialState = {
	firstname: '',
	middlename: '',
	lastname: '',
	username: '',
    users: [],
    isLoading: false,
	hasError: null,
};

export default (state = initialState, action) => {

    switch(action.type) {
    	// FETCH CASES
        case FETCH_USERS_BEGIN:
            return {
            	...state,
            	isLoading: true
            };
        case FETCH_USERS_SUCCESS:
            return {
            	...state,
		        isLoading: false,
		        users: action.payload.data
            };
        case FETCH_USERS_FAILURE:
            return {
          		...state,
		        isLoading: false,
		        hasError: action.payload.error,
		        users: []
            };
        // HANDLE
        case HANDLE_FIRSTNAME:
        	return {
        		...state,
        		firstname: action.payload.firstname
        	};
        case HANDLE_MIDDLENAME:
        	return {
        		...state,
        		middlename: action.payload.middlename
        	};
        case HANDLE_LASTNAME:
        	return {
        		...state,
        		lastname: action.payload.lastname
        	};
        case HANDLE_USERNAME:
        	return {
        		...state,
        		username: action.payload.username
        	};
        // CREATE
        case CREATE_USER_BEGIN:
        	return {
        		...state,
        		isLoading: true,
        		hasError: null
        	};
        case CREATE_USER_SUCCESS:
        	return {
        		...state,
        		isLoading: false,
        		hasError: null
        	};
        case CREATE_USER_FAIL:
        	return {
        		...state,
        		isLoading: false,
        		hasError: action.payload.error
        	};
        case CREATE_USER:
        	return {
        		...state
        	};
        // CLEAR STATE
        case CLEAR_FIELDS:
        	return {
        		...state,
        		firstname: '',
        		middlename: '',
        		lastname: '',
        		username: ''
        	};
        default:
            return state;
    }

}