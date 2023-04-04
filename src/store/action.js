import { SET_TODO_INPUT, 
    ADD_TODO_INPUT, 
    DELETE_TODO_INPUT,
    DELETE_ALL_TODO_INPUT,
    EDIT_TODO_INPUT
} from "./constant";

export const setTodoInput = payload => ({
    type: SET_TODO_INPUT,
    payload
});

export const addTodoInput = payload => ({
    type: ADD_TODO_INPUT,
    payload
});

export const deleteTodoInput = payload => ({
    type: DELETE_TODO_INPUT,
    payload
});

export const deleteALlTodoInput = payload => ({
    type: DELETE_ALL_TODO_INPUT,
    payload
});

export const editTodoInput = payload => ({
    type: EDIT_TODO_INPUT,
    payload
})