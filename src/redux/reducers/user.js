import {
    RECEIVE_TOKEN,
	RECEIVE_USERDATA,
	AUTHENTICATE,
} from '../actionCreator/';

const initialState = {
	isAuthenticated: false,
	user: {},
	token: null,
};

export default (state = initialState, action) => {

    switch(action.type) {
    	case RECEIVE_TOKEN:
    		return {
    			...state,
    			token: action.payload.token,
    		};
    	case RECEIVE_USERDATA:
			return {
				...state,
				user: action.payload.data,
			};
		case AUTHENTICATE:
			return {
				...state,
				isAuthenticated: true,
			};

        default:
            return state;
    }
}