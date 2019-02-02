import {
	CLEAR_ERRORS,
	HAS_ERROR_USERID,
	HAS_ERROR_TITLE
} from '../ActionCreator';

const initialState = {
	hasErrorUserId: false,
	hasErrorTitle: false
};

export default (state = initialState, action) => {

    switch(action.type) {
    	case CLEAR_ERRORS:
    		return {
    			...state,
    			hasErrorTitle: false,
    			hasErrorUserId: false
    		};
        case HAS_ERROR_TITLE:
        	return {
        		...state,
        		hasErrorTitle: true
        	};
        case HAS_ERROR_USERID:
        	return {
        		...state,
        		hasErrorUserId: true
        	};

        default:
            return state;
    }

}