import {
    ADD_TODO,
} from '../Constants';

const initialState = {
    key: 0,
    todos: [],
};

export default (state = initialState, action) => {

    switch(action.type) {
        case ADD_TODO:
            return {
            	...state,
                key: state.key + 1,
            	todos: state.todos.concat({key: state.key, todo: action.payload.todo}),
            };
        default:
            return state;
    }

}