import {
	RECEIVE_USERDATA,
	AUTHENTICATE,
	REMOVE_USERDATA,
	DEAUTHENTICATE,
} from '../actionCreator/';

const initialState = {
	isAuthenticated: false,
	data: {},
};

export default (state = initialState, action) => {

    switch(action.type) {
    	case RECEIVE_USERDATA:
			return {
				...state,
				data: action.payload.data,
			};
		case AUTHENTICATE:
			return {
				...state,
				isAuthenticated: true,
			};
		case REMOVE_USERDATA:
			return {
				...state,
				data: {},
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