// import actions from action creator
import {
    // api fetch
    SHOW_FETCH_LOADER,
    HIDE_FETCH_LOADER,

    // api post
    SHOW_POST_LOADER,
    HIDE_POST_LOADER,

    // serverside table
    BUILD_TABLE,
    DESTROY_TABLE,

} from '../ActionCreator';

const initialState = {
    // api requests loader states
    isFetching: false,
    isPosting:  false,
    isUpdating: false,
    isDeleting: false,

    // serverside table states
    data: [],
    pages: null,

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
            };
        
        default:
            return state;
    }
}