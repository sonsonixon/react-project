import {
    /* Api Request ^Fetch */
    SHOW_FETCH_LOADER,
    HIDE_FETCH_LOADER,

    /* Serverside Table */
    BUILD_TABLE,
    DESTROY_TABLE,

    /* Todos */
    IS_VALID_USERID,
    IS_INVALID_USERID,
    IS_VALID_TITLE,
    IS_INVALID_TITLE,

    // submit button
    ENABLE_SUBMIT_BUTTON,
    /*
    CLEAR_CLASS_TITLE,
    CLEAR_CLASS_USERID,
    CLEAR_CLASS_TODO,
    HIDE_POST_LOADER,
    INVALID_USERID,
    INVALID_TITLE,
    SHOW_POST_LOADER,    
    VALID_USERID,
    VALID_TITLE
    */
} from '../ActionCreator';

const initialState = {
    /* api request loaders */
    isFetching: false,
    isPosting:  false,
    isUpdating: false,
    isDeleting: false,

    // serverside table
    data: [],
    pages: null,

    /* todos */
    // input
    // used for validations
    todos: {
        isValidUserid:   null, 
        isInvalidUserid: null, 
        isValidTitle:    null, 
        isInvalidTitle:  null, 
    },

    // submit button
    isDisabled: true,
};

export default (state = initialState, action) => {

    switch(action.type) {
        // Show Fetch Loader
        case SHOW_FETCH_LOADER:
            return {
                ...state,
                isFetching: true
            };

        // Hide Fetch Loader
        case HIDE_FETCH_LOADER:
            return {
                ...state,
                isFetching: false
            };

        // Construct Serverside Table
        case BUILD_TABLE:
            return {
                ...state,
                data: action.payload.data.rows,
                pages: action.payload.data.pages
            };
        // De-construct Serverside Table
        case DESTROY_TABLE:
            return {
                ...state,
                data: [],
                pages: null,
            };
        
        // Todos
        case IS_VALID_USERID:
            return {
                ...state,
                isValidUserid: true,
                isInvalidUserid: false
            };
        case IS_INVALID_USERID:
            return {
                ...state,
                isInvalidUserid: true,
                isValidUserid: false
            };
        case IS_VALID_TITLE:
            return {
                ...state,
                isValidTitle: true,
                isInvalidTitle: false
            };
        case IS_INVALID_TITLE:
            return {
                ...state,
                isInvalidTitle: true,
                isValidTitle: false
            };

        // submit button
        case ENABLE_SUBMIT_BUTTON:
            return {
                ...state,
                isDisabled: false
            };
        /*
         case CLEAR_CLASS_USERID:
            return {
                ...state,
                invalidUserID: false,
                validUserID: false
            };
        case CLEAR_CLASS_TITLE:
            return {
                ...state,
                invalidTitle: false,
                validTitle: false
            };
        case CLEAR_CLASS_TODO:
            return {
                ...state,
                invalidUserID: false,
                invalidTitle: false,
                validUserID: false,
                validTitle: false
            };
        case INVALID_USERID:
            return {
                ...state,
                //isInvalidUserID: false,
                invalidUserID: true,
                validUserID: false
            };
        case INVALID_TITLE:
            return {
                ...state,
                invalidTitle: true,
                validTitle: false
            };
        case VALID_USERID:
            return {
                ...state,
                invalidUserID: false,
                validUserID: true
            };
        case VALID_TITLE:
            return {
                ...state,
                invalidTitle: false,
                validTitle: true
            };
        case SHOW_POST_LOADER:
            return {
                ...state,
                isPosting: true
            };
        case HIDE_POST_LOADER:
            return {
                ...state,
                isPosting: false
            }
        */
        
        default:
            return state;
    }
}