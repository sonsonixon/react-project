import {
    ADD_TODO,
} from '../../Constants';

const initialState = {
    key: 0,
    todos: [],
    isLoading: false,
	hasError: null
};

export default (state = initialState, action) => {

    switch(action.type) {
        case ADD_TODO:
            return {
            	...state,
                key: state.key + 1,
            	todos: state.todos.concat({key: state.key, todo: action.payload.todo}),
                isLoading: false,
                hasError: null
            };
        default:
            return state;
    }

}