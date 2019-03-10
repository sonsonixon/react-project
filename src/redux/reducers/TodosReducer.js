import {
	CLEAR_CLASS_TODOS,

    // userid
    HAS_ERROR_USERID,
    HAS_SUCCESS_USERID,
    IS_VALID_USERID,
    SET_ERROR_USERID,
    CLEAR_USERID,

    //title
    HAS_ERROR_TITLE,
    HAS_SUCCESS_TITLE,
    IS_VALID_TITLE,
    SET_ERROR_TITLE,
    CLEAR_TITLE,
} from '../Actions/';

const initialState = {
    userid: {
        hasError: false,
        hasSuccess: false,
        valid: false,
        error: ''
    },
    title: {
        hasError: false,
        hasSuccess: false,
        valid: false,
        error: ''
    },
};

export default (state = initialState, action) => {

    switch(action.type) {
    	case CLEAR_CLASS_TODOS:
    		return {
    			...state,
                userid: {
                    ...state.userid,
                    hasError: false,
                    hasSuccess: false,
                    valid: false,
                    error: '',
                },
                title: {
                    ...state.title,
                    hasError: false,
                    hasSuccess: false,
                    valid: false,
                    error: '',
                }
    		};
        // userid
        case HAS_ERROR_USERID:
        	return {
        		...state,
        		userid: {
                    ...state.userid,
                    hasError: true,
                    hasSuccess: false
                }
        	};
        case HAS_SUCCESS_USERID:
        	return {
        		...state,
                userid: {
                    ...state.userid,
                    hasError: false,
                    hasSuccess: true,
                    error: '',
                }
        	};
        case IS_VALID_USERID:
            return {
                ...state,
                userid: {
                    ...state.userid,
                    valid: true
                }
            };
        case SET_ERROR_USERID:
            return {
                ...state,
                userid: {
                    ...state.userid,
                    error: action.payload.message
                }
            };
        case CLEAR_USERID:
            return {
                ...state,
                userid: {
                    ...state.userid,
                    hasError: false,
                    hasSuccess: false,
                    valid: false,
                    error: '',
                }
            };

        // title
        case HAS_ERROR_TITLE:
            return {
                ...state,
                title: {
                    ...state.title,
                    hasError: true,
                    hasSuccess: false
                }
            };

        case HAS_SUCCESS_TITLE:
            return {
                ...state,
                title: {
                    ...state.title,
                    hasError: false,
                    hasSuccess: true,
                    error: '',
                }
            };
        case IS_VALID_TITLE:
            return {
                ...state,
                title: {
                    ...state.title,
                    valid: true,
                }
            };
        case SET_ERROR_TITLE:
            return {
                ...state,
                title: {
                    ...state.title,
                    error: action.payload.message
                }
            };
        case CLEAR_TITLE:
            return {
                ...state,
                title: {
                    ...state.title,
                    hasError: false,
                    hasSuccess: false,
                    valid: false,
                    error: '',
                }
            };

        default:
            return state;
    }

}