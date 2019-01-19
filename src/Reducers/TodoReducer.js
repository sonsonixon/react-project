import {
    CLEAR_STATE_TODO,
    CHANGE_USERID,
    CHANGE_TITLE,
    FETCH_FAILED,
    UPDATE_TODOS,
} from '../Constants';

const initialState = {
    userid: '',
    title: '',
    error: null,
    todos: []
};

export default (state = initialState, action) => {

    switch(action.type) {
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
                todos: action.payload.data
            };
        default:
            return state;
    }

}