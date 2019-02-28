import {
    // loaders
    SHOW_FETCH_LOADER,
    HIDE_FETCH_LOADER,
    SHOW_POST_LOADER,
    HIDE_POST_LOADER,

    // serverside table
    BUILD_TABLE,
    DESTROY_TABLE,
    GET_TABLE_DATA,

    // form
    GET_CURRENT_FORM,
    REMOVE_FORM,

     // login
    VALID_USERNAME,
    INVALID_USERNAME,
    VALID_PASSWORD,
    INVALID_PASSWORD,

} from '../actionCreator/';

const initialState = {
    // loaders
    isFetching: false,
    isPosting:  false,
    isUpdating: false,
    isDeleting: false,

    // form
    currentForm: '',

    // serverside table
    data: [],
    pages: null,
    page: null,
    pageSize: null,
    url: null,

    // login
    login: {
        username: {
            isValid: false,
        },
        password: {
            isValid: false,
        }
    },
};

export default (state = initialState, action) => {

    switch(action.type) {
        // fetch
        case SHOW_FETCH_LOADER:
            return {
                ...state,
                isFetching: true
            };
        case HIDE_FETCH_LOADER:
            return {
                ...state,
                isFetching: false
            };
        // post
        case SHOW_POST_LOADER:
            return {
                ...state,
                isPosting: true
            };
        case HIDE_POST_LOADER:
            return {
                ...state,
                isPosting: false
            };
        // save serverside table api url, page, and page size to redux state
        case GET_TABLE_DATA:
            return {
                ...state,
                page: action.payload.page,
                pageSize: action.payload.pageSize,
                url: action.payload.api
            };
        // construct serverside table
        case BUILD_TABLE:
            return {
                ...state,
                data: action.payload.data.rows,
                pages: action.payload.data.pages
            };
        // de-construct table
        case DESTROY_TABLE:
            return {
                ...state,
                data: [],
                pages: null,
                page: null,
                pageSize: null,
                url: null,
            };
        // get current form
        case GET_CURRENT_FORM:
            return {
                ...state,
                currentForm: action.payload.form
            };
        // remove form
        case REMOVE_FORM:
            return {
                ...state,
                currentForm: '',
            };

        // login
        case VALID_USERNAME:
            return {
                ...state,
                login: {
                    ...state.login,
                    username: {
                        ...state.username,
                        isValid: true,
                    }
                }
            };
        case INVALID_USERNAME:
            return {
               ...state,
                login: {
                    ...state.login,
                    username: {
                        ...state.username,
                        isValid: false,
                    }
                } 
            }
        case VALID_PASSWORD:
            return {
                ...state,
                login: {
                    ...state.login,
                    password: {
                        ...state.password,
                        isValid: true,
                    }
                }
            };
        case INVALID_PASSWORD:
            return {
               ...state,
                login: {
                    ...state.login,
                    password: {
                        ...state.password,
                        isValid: false,
                    }
                } 
            }
        
        default:
            return state;
    }
}