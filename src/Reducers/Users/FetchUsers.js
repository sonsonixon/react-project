import {
    FETCH_USERS_BEGIN,
    FETCH_USERS_SUCCESS,
    FETCH_USERS_FAILURE
} from '../../Constants';

const initialState = {
    users: [],
    isLoading: false,
	hasError: null
};

export default (state = initialState, action) => {

    switch(action.type) {
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
        default:
            return state;
    }

}