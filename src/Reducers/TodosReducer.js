import {
    UPDATE_USERID,
    UPDATE_TITLE
    /*
    CLEAR_STATE_TODO,
    CHANGE_USERID,
    CHANGE_TITLE,
    FETCH_FAILED,
    UPDATE_TODOS,
    */
} from '../ActionCreator';

const initialState = {
    userid: '',
    title: ''
};

export default (state = initialState, action) => {

    switch(action.type) {
        case UPDATE_USERID:
            return { 
                ...state, 
                userid: action.payload.data 
            };

        case UPDATE_TITLE: 
            return { 
                ...state, 
                title: action.payload.data 
            };
        /*
        case CLEAR_STATE_TODO:
            return {
                ...state,
                userid: '',
                title: ''
            };
        case CHANGE_USERID:
            return {
                ...state,
                userid: action.payload.data
            };
        case CHANGE_TITLE:
            return {
                ...state,
                title: action.payload.data
            };
        case FETCH_FAILED:
            return {
                ...state,
                error: action.payload.error
            };
        case UPDATE_TODOS:
            return {
                ...state,
                todos: action.payload.data.rows
            };
        */
        default:
            return state;
    }

}