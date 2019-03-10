import {
	IS_VALID_username,
	IS_INVALID_username,
	IS_VALID_password,
	IS_INVALID_password,
} from '../Actions/';

const initialState = {
	username: {
        isValid: false,
    },
    password: {
        isValid: false,
    },    
};

export default (state = initialState, action) => {

	switch(action.type) {
		// login
        case IS_VALID_username:
            return {
                ...state,
                username: {
                    ...state.username,
                    isValid: true,
                }
            };
        case IS_INVALID_username:
            return {
               ...state,
                 username: {
                    ...state.username,
                    isValid: false,
                }
            }
        case IS_VALID_password:
            return {
                ...state,
                password: {
                    ...state.password,
                    isValid: true,
                }
            };
        case IS_INVALID_password:
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