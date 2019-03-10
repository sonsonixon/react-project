import {
	SET_CURRENT_USER,
	SET_UUID,
	DESTROY_USER_DATA,
	AUTHENTICATE,
	DEAUTHENTICATE,
} from '../Actions/';

const initialState = {
	isAuthenticated: false,
	uuid: '',
	user: {},
};

export default (state = initialState, action) => {

    switch(action.type) {
    	case SET_CURRENT_USER:
    		return {
    			...state,
    			user: action.payload.data,
    		};
    	case SET_UUID:
			return {
				...state,
				uuid: action.payload.uuid,
			};
		case DESTROY_USER_DATA:
			return {
				...state,
				uuid: '',
				user: {},
			};
		case AUTHENTICATE:
			return {
				...state,
				isAuthenticated: true,
			};
		case DEAUTHENTICATE:
			return {
				...state,
				isAuthenticated: false,
			};

        default:
            return state;
    }
}