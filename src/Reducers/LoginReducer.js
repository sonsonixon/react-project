import {
    IS_SUBMITTING,
    IS_SUBMITTED,
    IS_VALID_USERNAME,
    IS_VALID_PASSWORD,
    IS_INVALID_USERNAME,
    IS_INVALID_PASSWORD,
} from '../ActionCreator';

const initialState = {
    isLoggingIn: false,
    username: {
        isValid: false,
    },
    password: {
        isValid: false,
    }
};

export default (state = initialState, action) => {

    switch(action.type) {
        case IS_SUBMITTING:
            return {
                ...state,
                isLoggingIn: true,
            };
        case IS_SUBMITTED:
            return {
                ...state,
                isLoggingIn: false,
            };
        case IS_VALID_USERNAME:
            return {
                ...state,
                username: {
                    ...state.username,
                    isValid: true,
                }
            };
        case IS_VALID_PASSWORD: 
            return {
                ...state,
                password: {
                    ...state.password,
                    isValid: true,
                }
            };
        case IS_INVALID_USERNAME: 
            return {
                ...state,
                username: {
                    ...state.username,
                    isValid: false,
                }   
            };
        case IS_INVALID_PASSWORD:  
            return {
                ...state,
                password: {
                    ...state.password,
                    isValid: false,
                }
            };
        default:
            return state;
    }
}