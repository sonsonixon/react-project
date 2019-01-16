import {
    FETCH_USERS_BEGIN,
    FETCH_USERS_SUCCESS,
    FETCH_USERS_FAILURE,
    HANDLE_FIRSTNAME,
    HANDLE_MIDDLENAME,
    HANDLE_LASTNAME,
    HANDLE_USERNAME,
    ADD_USER
} from '../Constants';

const initialState = {
	firstname: '',
	middlename: '',
	lastname: '',
	username: '',
    users: [],
    isLoading: false,
	hasError: null
};

export default (state = initialState, action) => {

    switch(action.type) {
    	// FETCH CASES
        case FETCH_USERS_BEGIN:
            return {
            	...state,
            	loading: true
            };
        case FETCH_USERS_SUCCESS:
            return {
            	...state,
		        loading: false,
		        users: action.payload.data
            };
        case FETCH_USERS_FAILURE:
            return {
          		...state,
		        loading: false,
		        error: action.payload.err,
		        users: {}
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
        default:
            return state;
    }

}