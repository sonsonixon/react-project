import {
    // fetch loader
    SHOW_FETCH_LOADER,
    HIDE_FETCH_LOADER,

    // post loader
    SHOW_POST_LOADER,
    HIDE_POST_LOADER,

    // serverside table
    BUILD_TABLE,
    DESTROY_TABLE,
    GET_TABLE_DATA,

    // form
    GET_CURRENT_FORM,
    REMOVE_FORM,

} from '../actionCreator/';

const initialState = {
    // api requests loader states
    isFetching: false,
    isPosting:  false,
    isUpdating: false,
    isDeleting: false,

    // current form
    currentForm: '',

    // serverside table states
    data: [],
    pages: null,
    page: null,
    pageSize: null,
    url: null,
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
            }
        
        default:
            return state;
    }
}