import {
    FETCH_USERS_BEGIN,
    FETCH_USERS_SUCCESS,
    FETCH_USERS_FAILURE,
    GET_FIRSTNAME,
    GET_MIDDLENAME,
    GET_LASTNAME,
    GET_USERNAME,
    CREATE_USER,
    CREATE_USER_BEGIN,
    CREATE_USER_SUCCESS,
    CREATE_USER_FAIL,
    CLEAR_USERS_STATE,
    IS_VALID_FIRSTNAME,
    IS_INVALID_FIRSTNAME
} from '../Constants';

const initialState = {
	firstname: '',
    firstnameStatus: 'form-group',
	middlename: '',
	lastname: '',
	username: '',
    users: [],
    isLoading: false,
	error: null,
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
		        error: action.payload.error,
		        users: []
            };
        // GET
        case GET_FIRSTNAME:
        	return {
        		...state,
        		firstname: action.payload.firstname
        	};
        case GET_MIDDLENAME:
        	return {
        		...state,
        		middlename: action.payload.middlename
        	};
        case GET_LASTNAME:
        	return {
        		...state,
        		lastname: action.payload.lastname
        	};
        case GET_USERNAME:
        	return {
        		...state,
        		username: action.payload.username
        	};
        // CREATE
        case CREATE_USER_BEGIN:
        	return {
        		...state,
        		isLoading: true,
        		firstnameHasError: false,
        		error: null
        	};
        case CREATE_USER_SUCCESS:
        	return {
        		...state,
        		isLoading: false,
        		hasError: false,
        		error: null
        	};
        case CREATE_USER_FAIL:
        	return {
        		...state,
        		isLoading: false,
        		error: action.payload.error
        	};
        case CREATE_USER:
        	return {
        		...state
        	};
        // CLEAR STATE
        case CLEAR_USERS_STATE:
        	return {
        		...state,
        		firstname: '',
        		middlename: '',
        		lastname: '',
        		username: ''
        	};
        case IS_VALID_FIRSTNAME:
            return {
                ...state,
                firstnameStatus: 'form-group has-success'
            };
        case IS_INVALID_FIRSTNAME:
            return {
                ...state,
                firstnameStatus: 'form-group has-danger'
            };
        default:
            return state;
    }

}