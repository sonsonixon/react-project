import { ADD_TODO } from '../Constants';

export const addTodo = (todo) => ({
    type: ADD_TODO,
    payload: { todo }
})