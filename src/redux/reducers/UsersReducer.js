import {
    CLEAR_USERS,
    // firstname
    HAS_ERROR_FIRSTNAME,
    HAS_SUCCESS_FIRSTNAME,
    SET_ERROR_FIRSTNAME,
    CLEAR_FIRSTNAME,
    // middle name
    HAS_ERROR_MIDDLENAME,
    HAS_SUCCESS_MIDDLENAME,
    SET_ERROR_MIDDLENAME,
    CLEAR_MIDDLENAME,
    // last name
    HAS_ERROR_LASTNAME,
    HAS_SUCCESS_LASTNAME,
    SET_ERROR_LASTNAME,
    CLEAR_LASTNAME,
    // username
    HAS_ERROR_USERNAME,
    HAS_SUCCESS_USERNAME,
    SET_ERROR_USERNAME,
    CLEAR_USERNAME,
    // password
    HAS_ERROR_PASSWORD,
    HAS_SUCCESS_PASSWORD,
    SET_ERROR_PASSWORD,
    CLEAR_PASSWORD,
    // status
    HAS_ERROR_STATUS,
    HAS_SUCCESS_STATUS,
    SET_ERROR_STATUS,
    CLEAR_STATUS,
    // role
    HAS_ERROR_ROLE,
    HAS_SUCCESS_ROLE,
    SET_ERROR_ROLE,
    CLEAR_ROLE,
} from '../Actions/';

const initialState = {
    firstname : {
        hasError: false,
        hasSuccess: false,
        isValid: false,
        errorMessage: '',
    },
    middlename: {
        hasError: false,
        hasSuccess: false,
        isValid: false,
        errorMessage: '',
    },
    lastname  : {
        hasError: false,
        hasSuccess: false,
        isValid: false,
        errorMessage: '',
    },
    username  : {
        hasError: false,
        hasSuccess: false,
        isValid: false,
        errorMessage: '',
    },
    password  : {
        hasError: false,
        hasSuccess: false,
        isValid: false,
        errorMessage: '',
    },
    status    : {
        hasError: false,
        hasSuccess: false,
        isValid: false,
        errorMessage: '',
    },
    role      : {
        hasError: false,
        hasSuccess: false,
        isValid: false,
        errorMessage: '',
    }
};

export default (state = initialState, action) => {

    switch(action.type) {
        // clear all changes in the states
        case CLEAR_USERS:
            return {
                ...state,
                firstname: {
                    ...state.firstname,
                    hasError: false,
                    hasSuccess: false,
                    isValid: false,
                    errorMessage: '',
                },
                middlename: {
                    ...state.middlename,
                    hasError: false,
                    hasSuccess: false,
                    isValid: false,
                    errorMessage: '',
                },
                lastname: {
                    ...state.lastname,
                    hasError: false,
                    hasSuccess: false,
                    isValid: false,
                    errorMessage: '',
                },
                username: {
                    ...state.username,
                    hasError: false,
                    hasSuccess: false,
                    isValid: false,
                    errorMessage: '',
                },
                password: {
                    ...state.password,
                    hasError: false,
                    hasSuccess: false,
                    isValid: false,
                    errorMessage: '',
                },
                status: {
                    ...state.status,
                    hasError: false,
                    hasSuccess: false,
                    isValid: false,
                    errorMessage: '',
                },
                role: {
                    ...state.role,
                    hasError: false,
                    hasSuccess: false,
                    isValid: false,
                    errorMessage: '',
                },
            };
        // first name
        case HAS_ERROR_FIRSTNAME:
            return {
                ...state,
                firstname: {
                    ...state.firstname,
                    hasError: true,
                    hasSuccess: false,
                    isValid: false,
                }
            };
        case HAS_SUCCESS_FIRSTNAME:
            return {
                ...state,
                firstname: {
                    ...state.firstname,
                    hasError: false,
                    hasSuccess: true,
                    isValid: true,
                    errorMessage: '',
                }
            };
        case SET_ERROR_FIRSTNAME:
            return {
                ...state,
                firstname: {
                    ...state.firstname,
                    errorMessage: action.payload.message,
                }
            };
        case CLEAR_FIRSTNAME:
            return {
                ...state,
                firstname: {
                    ...state.firstname,
                    hasError: false,
                    hasSuccess: false,
                    isValid: false,
                    errorMessage: ''
                }
            };
        // middle name
        case HAS_ERROR_MIDDLENAME:
            return {
                ...state,
                middlename: {
                    ...state.middlename,
                    hasError: true,
                    hasSuccess: false,
                    isValid: false,
                }
            };
        case HAS_SUCCESS_MIDDLENAME:
            return {
                ...state,
                middlename: {
                    ...state.middlename,
                    hasError: false,
                    hasSuccess: true,
                    isValid: true,
                    errorMessage: '',
                }
            };
        case SET_ERROR_MIDDLENAME:
            return {
                ...state,
                middlename: {
                    ...state.middlename,
                    errorMessage: action.payload.message,
                }
            };
        case CLEAR_MIDDLENAME:
            return {
                ...state,
                middlename: {
                    ...state.middlename,
                    hasError: false,
                    hasSuccess: false,
                    isValid: false,
                    errorMessage: '',
                }
            };
        // last name
        case HAS_ERROR_LASTNAME:
            return {
                ...state,
                lastname: {
                    ...state.lastname,
                    hasError: true,
                    hasSuccess: false,
                    isValid: false,
                }
            };
        case HAS_SUCCESS_LASTNAME:
            return {
                ...state,
                lastname: {
                    ...state.lastname,
                    hasError: false,
                    hasSuccess: true,
                    isValid: true,
                    errorMessage: '',
                }
            };
        case SET_ERROR_LASTNAME:
            return {
                ...state,
                lastname: {
                    ...state.lastname,
                    errorMessage: action.payload.message,
                }
            };
        case CLEAR_LASTNAME:
            return {
                ...state,
                lastname: {
                    ...state.lastname,
                    hasError: false,
                    hasSuccess: false,
                    isValid: false,
                    errorMessage: '',
                }
            };
        // username
        case HAS_ERROR_USERNAME:
            return {
                ...state,
                username: {
                    ...state.username,
                    hasError: true,
                    hasSuccess: false,
                    isValid: false,
                }
            };
        case HAS_SUCCESS_USERNAME:
            return {
                ...state,
                username: {
                    ...state.username,
                    hasError: false,
                    hasSuccess: true,
                    isValid: true,
                    errorMessage: '',
                }
            };
        case SET_ERROR_USERNAME:
            return {
                ...state,
                username: {
                    ...state.username,
                    errorMessage: action.payload.message,
                }
            };
        case CLEAR_USERNAME:
            return {
                ...state,
                username: {
                    ...state.username,
                    hasError: false,
                    hasSuccess: false,
                    isValid: false,
                    errorMessage: '',
                }
            };
        // password
        case HAS_ERROR_PASSWORD:
            return {
                ...state,
                password: {
                    ...state.password,
                    hasError: true,
                    hasSuccess: false,
                    isValid: false,
                }
            };
        case HAS_SUCCESS_PASSWORD:
            return {
                ...state,
                password: {
                    ...state.password,
                    hasError: false,
                    hasSuccess: true,
                    isValid: true,
                    errorMessage: '',
                }
            };
        case SET_ERROR_PASSWORD:
            return {
                ...state,
                password: {
                    ...state.password,
                    errorMessage: action.payload.message,
                }
            };
        case CLEAR_PASSWORD:
            return {
                ...state,
                password: {
                    ...state.password,
                    hasError: false,
                    hasSuccess: false,
                    isValid: false,
                    errorMessage: '',
                }
            };
        // status
        case HAS_ERROR_STATUS:
            return {
                ...state,
                status: {
                    ...state.status,
                    hasError: true,
                    hasSuccess: false,
                    isValid: false,
                }
            };
        case HAS_SUCCESS_STATUS:
            return {
                ...state,
                status: {
                    ...state.status,
                    hasError: false,
                    hasSuccess: true,
                    isValid: true,
                    errorMessage: '',
                }
            };
        case SET_ERROR_STATUS:
            return {
                ...state,
                status: {
                    ...state.status,
                    errorMessage: action.payload.message,
                }
            };
        case CLEAR_STATUS:
            return {
                ...state,
                status: {
                    ...state.status,
                    hasError: false,
                    hasSuccess: false,
                    isValid: false,
                    errorMessage: '',
                }
            };
        // role
        // status
        case HAS_ERROR_ROLE:
            return {
                ...state,
                role: {
                    ...state.role,
                    hasError: true,
                    hasSuccess: false,
                    isValid: false,
                }
            };
        case HAS_SUCCESS_ROLE:
            return {
                ...state,
                role: {
                    ...state.role,
                    hasError: false,
                    hasSuccess: true,
                    isValid: true,
                    errorMessage: '',
                }
            };
        case SET_ERROR_ROLE:
            return {
                ...state,
                role: {
                    ...state.role,
                    errorMessage: action.payload.message,
                }
            };
        case CLEAR_ROLE:
            return {
                ...state,
                role: {
                    ...state.role,
                    hasError: false,
                    hasSuccess: false,
                    isValid: false,
                    errorMessage: '',
                }
            };
        // default
        default:
            return state;
    }

}