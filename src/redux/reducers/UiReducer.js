import {
    // loaders
    SHOW_FETCH_LOADER,
    HIDE_FETCH_LOADER,

    SHOW_POST_LOADER,
    HIDE_POST_LOADER,

    SET_TABLE_DATA,
    CREATE_TABLE,
    DESTROY_TABLE,

    SET_FORM,
    DESTROY_FORM,

    SET_DATA_USERS,
    DESTROY_DATA_USERS,   

} from '../Actions/';

const initialState = {

    // loaders
    isFetching : false,
    isPosting  : false,

     // serverside table
    serversideTable: {
        data:     [],
        pages:    null,
        page:     null,
        pageSize: null,
        url:      null,
    },

    // form
    currentForm: '',

    // fetched data for update
    data: {
        users: {},
        todos: {},
        items: {},
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


        // save table data to state
        case SET_TABLE_DATA:
            return {
                ...state,
                serversideTable: {
                    ...state.serversideTable,
                    page:     action.payload.page,
                    pageSize: action.payload.pageSize,
                    url:      action.payload.url,
                },
                
            };
        // create table
        case CREATE_TABLE:
            return {
                ...state,
                serversideTable: {
                    ...state.serversideTable,
                    data:  action.payload.data.rows,
                    pages: action.payload.data.pages
                },                
            };
        // destroy table
        case DESTROY_TABLE:
            return {
                ...state,
                serversideTable: {
                    ...state.serversideTable,
                    data:     [],
                    pages:    null,
                    page:     null,
                    pageSize: null,
                    url:      null,
                },                
            };
        // save form
        case SET_FORM:
            return {
                ...state,
                currentForm: action.payload.form
            };
        // remove form
        case DESTROY_FORM:
            return {
                ...state,
                currentForm: '',
            };
        // fetched data
        case SET_DATA_USERS:
            return {
                ...state,
                data: {
                    ...state.data,
                    users: action.payload.data,
                },
            };
        case DESTROY_DATA_USERS:
            return {
                ...state,
                data: {
                    ...state.data,
                    users: {},
                },
            }
        
        default:
            return state;
    }
}